import React, { useState, useEffect, useContext } from "react";
import { getEventDetailsAPI } from "../components/services/userServices";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../components/Cart/CartContext";
import Cart from "../components/Cart/Cart";
import { toast } from "react-toastify";
import { formatDateTime, PriceFormat } from "../utils/tools";

function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [eventDetails, setEventDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ticketCounts, setTicketCounts] = useState({});
  const [stallCounts, setStallCounts] = useState({});

  const decreaseCount = (id, type) => {
    if (type === "ticket") {
      setTicketCounts((prevCounts) => ({
        ...prevCounts,
        [id]: prevCounts[id] > 0 ? prevCounts[id] - 1 : 0,
      }));
    } else if (type === "stall") {
      setStallCounts((prevCounts) => ({
        ...prevCounts,
        [id]: prevCounts[id] > 0 ? prevCounts[id] - 1 : 0,
      }));
    }
  };

  const increaseCount = (id, type) => {
    if (type === "ticket") {
      setTicketCounts((prevCounts) => ({
        ...prevCounts,
        [id]: (prevCounts[id] || 0) + 1,
      }));
    } else if (type === "stall") {
      setStallCounts((prevCounts) => ({
        ...prevCounts,
        [id]: (prevCounts[id] || 0) + 1,
      }));
    }
  };

  const handleBookNow = (id) => {
    const selectedEventDetail = eventDetails.eventDetail.find(
      (event) => event.id === id
    );

    if (!selectedEventDetail) {
      console.error("Không tìm thấy sự kiện.");
      return;
    }

    const ticketCount = ticketCounts[id] || 0;
    if (ticketCount === 0) {
      toast.error("Hãy chọn ít nhất 1 vé!");
      return;
    }

    const selectedEvent = {
      eventId: selectedEventDetail.id,
      eventName: eventDetails.eventName,
      startDate: selectedEventDetail.startDate,
      endDate: selectedEventDetail.endDate,
      location: selectedEventDetail.location.locationName,
      ticketCount: ticketCount,
      ticketPrice: selectedEventDetail.ticketPrice,
    };

    toast.success("Đang chuyển đến trang thanh toán...", {
      onClose: () => {
        navigate("/checkout", {
          state: {
            eventDetail: selectedEvent,
            ticketCount: ticketCount,
            eventBanner: eventDetails.banner,
            checkoutType: "bookNow",
          },
        });
      },
      autoClose: 2000,
    });
  };

  const handleAddToCart = (id, type) => {
    const selectedEventDetail = eventDetails.eventDetail.find(
      (event) => event.id === id
    );

    if (!selectedEventDetail) {
      console.error("Không tìm thấy sự kiện.");
      return;
    }

    if (type === "ticket") {
      const ticketCount = ticketCounts[id] || 0;
      if (ticketCount === 0) {
        toast.error("Hãy chọn ít nhất 1 vé!");
        return;
      }

      const cartItem = {
        eventId: selectedEventDetail.id,
        eventName: eventDetails.eventName,
        startDate: selectedEventDetail.startDate,
        endDate: selectedEventDetail.endDate,
        location: selectedEventDetail.location.locationName,
        ticketCount: ticketCount,
        ticketPrice: selectedEventDetail.ticketPrice,
        eventBanner: eventDetails.banner,
      };

      addToCart(cartItem);
      toast.success("Vé đã được thêm vào Giỏ Hàng!");
    } else if (type === "stall") {
      const stallCount = stallCounts[id] || 0;
      if (stallCount === 0) {
        toast.error("Hãy chọn ít nhất 1 gian hàng!");
        return;
      }

      const cartItem = {
        eventId: selectedEventDetail.id,
        eventName: eventDetails.eventName,
        startDate: selectedEventDetail.startDate,
        endDate: selectedEventDetail.endDate,
        location: selectedEventDetail.location.locationName,
        stallCount: stallCount,
        stallPrice: selectedEventDetail.stallPrice,
        eventBanner: eventDetails.banner,
      };

      addToCart(cartItem);
      toast.success("Gian hàng đã được thêm vào Giỏ Hàng!");
    }
  };

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        setLoading(true);
        const details = await getEventDetailsAPI(eventId);
        setEventDetails(details);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading event details</div>;
  if (!eventDetails) return <div>No event details found</div>;

  const isEventPast = (endDate) => {
    const currentDateTime = new Date();
    const eventEndDate = new Date(endDate);
    return currentDateTime > eventEndDate;
  };

  return (
    <div>
      <div className="wrapper">
        <div className="event-dt-block p-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="main-event-dt">
                  <div className="event-img">
                    <img
                      src={
                        eventDetails.banner ||
                        "./assets/images/event-imgs/big-2.jpg"
                      }
                      alt={eventDetails.eventName}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="main-event-content">
                  <div className="event-top-dt">
                    <h3 className="event-main-title">
                      {eventDetails.eventName}
                    </h3>
                  </div>
                  <div
                    className="event-description"
                    dangerouslySetInnerHTML={{
                      __html: eventDetails.eventDescription,
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                {eventDetails.eventDetail.map((eventDetail) => (
                  <div key={eventDetail.id} className="event-right-dt">
                    <div className="main-card">
                      <div className="event-dt-right-group mt-5">
                        <div className="event-dt-right-icon">
                          <i className="fa-solid fa-calendar-day" />
                        </div>
                        <div className="event-dt-right-content">
                          <h4>Thời gian</h4>
                          <h5>
                            {formatDateTime(eventDetail.startDate)} -{" "}
                            {formatDateTime(eventDetail.endDate)}
                          </h5>
                        </div>
                      </div>
                      <div className="event-dt-right-group">
                        <div className="event-dt-right-icon">
                          <i className="fa-solid fa-location-dot" />
                        </div>
                        <div className="event-dt-right-content">
                          <h4>Địa điểm</h4>
                          <h5 className="mb-0">
                            {eventDetail.location.locationName}
                          </h5>
                        </div>
                      </div>
                      {!isEventPast(eventDetail.endDate) && (
                        <div className="select-tickets-block">
                          <div className="select-ticket-action">
                            <div className="ticket-price">
                              <h5>Giá vé</h5>
                              <strong>
                                <PriceFormat price={eventDetail.ticketPrice} />
                                <div className="ticket-remaining">
                                  <p>
                                    Vé còn lại:{" "}
                                    {eventDetail.ticketForSaleInventory}
                                  </p>
                                </div>
                              </strong>
                            </div>
                            <div className="quantity">
                              <div className="counter">
                                <span
                                  className="down"
                                  onClick={() =>
                                    decreaseCount(eventDetail.id, "ticket")
                                  }
                                >
                                  -
                                </span>
                                <input
                                  type="text"
                                  value={ticketCounts[eventDetail.id] || 0}
                                  readOnly
                                />
                                <span
                                  className="up"
                                  onClick={() =>
                                    increaseCount(eventDetail.id, "ticket")
                                  }
                                >
                                  +
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="xtotel-tickets-count">
                            <div className="x-title">
                              {ticketCounts[eventDetail.id] || 0}x Ticket(s)
                            </div>
                            <h4>
                              <span>
                                <PriceFormat
                                  price={
                                    (ticketCounts[eventDetail.id] || 0) *
                                    eventDetail.ticketPrice
                                  }
                                />
                              </span>
                            </h4>
                          </div>

                          <div className="booking-btn d-flex justify-content-between mt-4">
                            <button
                              className="main-btn btn-hover w-50 me-1"
                              type="button"
                              onClick={() => handleBookNow(eventDetail.id)}
                            >
                              <strong>Mua Vé!</strong>
                            </button>
                            <button
                              className="main-btn btn-hover w-50 ms-1"
                              type="button"
                              onClick={() =>
                                handleAddToCart(eventDetail.id, "ticket")
                              }
                            >
                              <strong>Thêm giỏ hàng</strong>
                            </button>
                          </div>

                          <div className="select-ticket-action">
                            <div className="ticket-price mt-4">
                              <h5>Giá gian hàng</h5>
                              <strong>
                                <PriceFormat price={eventDetail.stallPrice} />
                                <div className="stall-remaining">
                                  <p>
                                    Gian hàng còn lại:{" "}
                                    {eventDetail.stallForSaleInventory}
                                  </p>
                                </div>
                              </strong>
                            </div>
                            <div className="quantity">
                              <div className="counter">
                                <span
                                  className="down"
                                  onClick={() =>
                                    decreaseCount(eventDetail.id, "stall")
                                  }
                                >
                                  -
                                </span>
                                <input
                                  type="text"
                                  value={stallCounts[eventDetail.id] || 0}
                                  readOnly
                                />
                                <span
                                  className="up"
                                  onClick={() =>
                                    increaseCount(eventDetail.id, "stall")
                                  }
                                >
                                  +
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="xtotel-tickets-count">
                            <div className="x-title">
                              {stallCounts[eventDetail.id] || 0}x Stall(s)
                            </div>
                            <h4>
                              <span>
                                <PriceFormat
                                  price={
                                    (stallCounts[eventDetail.id] || 0) *
                                    eventDetail.stallPrice
                                  }
                                />
                              </span>
                            </h4>
                          </div>

                          <div className="booking-btn mt-2">
                            <button
                              className="main-btn btn-hover w-100 mt-3"
                              type="button"
                              onClick={() =>
                                handleAddToCart(eventDetail.id, "stall")
                              }
                            >
                              <strong>Mua gian hàng</strong>
                            </button>
                          </div>
                        </div>
                      )}
                      {isEventPast(eventDetail.endDate) && (
                        <div className="select-tickets-block">
                          <div className="booking-btn mt-2">
                            <button
                              className="main-end-btn w-100"
                              type="button"
                              disabled
                            >
                              <strong>SỰ KIỆN ĐÃ NGỪNG BÁN</strong>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
}

export default EventDetails;
