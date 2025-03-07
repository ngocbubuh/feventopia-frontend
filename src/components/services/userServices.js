// userService.js
import { param } from "jquery";
import config from "../../utils/cus-axios"; // Import your API configuration

export const loginAPI = async (userName, password) => {
  try {
    const response = await config.post("/auth/SignIn", {
      userName,
      password,
    });

    if (response.status === 200) {
      return response;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

export const signupAPI = async (userData) => {
  try {
    const response = await config.post("/auth/SignUp", userData);

    if (response.status === 200) {
      return response;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const getProfileAPI = async () => {
  try {
    const response = await config.get(`/user/management/GetProfile`);

    if (response.status === 200) {
      return response.data; // Return profile data
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
};

export const putUpdateProfileAPI = async (profileData, token) => {
  let headers = {
    Authorization: `Bearer ${token}`,
  };

  if (profileData instanceof FormData) {
    headers["Content-Type"] = "multipart/form-data";
  } else {
    headers["Content-Type"] = "application/json";
  }

  try {
    const response = await config.put(
      "/user/management/UpdateAccountProfile",
      profileData,
      {
        headers: headers,
      }
    );

    if (response.status === 200) {
      return response.data; // Return updated profile data
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};

export const changePasswordAPI = async (currentPassword, newPassword) => {
  try {
    const response = await config.post("/auth/ChangePassword", {
      currentPassword,
      newPassword,
      confirmNewPassword: newPassword, // Include confirmNewPassword in request body
    });

    if (response.status === 200) {
      return response.data; // Return success message or updated data if needed
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error changing password:", error);
    throw error;
  }
};

export const rechargeAPI = async (rechargeData) => {
  try {
    const response = await config.post("/payment/Recharge", null, {
      params: {
        amount: rechargeData.amount,
      },
    });

    if (response.status === 200) {
      return response;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error during recharge:", error);
    throw error;
  }
};

export const getAllEventForVisitorAPI = async (
  pageNumber = 1,
  pageSize = 8,
  category,
  status
) => {
  try {
    const response = await config.get("/event/GetAllEventForVisitor", {
      params: {
        PageNumber: pageNumber,
        PageSize: pageSize,
        Category: category,
        Status: status,
      },
    });

    if (response.status === 200) {
      const pagination = JSON.parse(response.headers["x-pagination"]);
      return {
        events: response.data, // Adjust based on actual response structure
        pagination, // Contains TotalCount, PageSize, CurrentPage, TotalPages, HasNext, HasPrevious
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const getAllEventForOtherAPI = async (
  pageNumber = 1,
  pageSize = 8,
  category,
  status
) => {
  try {
    const response = await config.get("/event/GetAllEvent", {
      params: {
        PageNumber: pageNumber,
        PageSize: pageSize,
        Category: category,
        Status: status,
      },
    });

    if (response.status === 200) {
      const pagination = JSON.parse(response.headers["x-pagination"]);
      return {
        events: response.data, // Adjust based on actual response structure
        pagination, // Contains TotalCount, PageSize, CurrentPage, TotalPages, HasNext, HasPrevious
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const getEventDetailsAPI = async (eventId) => {
  try {

    const response = await config.get(`/event/GetEventById?id=${eventId}`
      );

    if (response.status === 200) {
      return response.data; // Return the event details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching event details:", error);
    throw error;
  }
};

export const getEventByIdOperatorAPI = async (eventId) => {
  try {
    const response = await config.get("/event/GetEventById-Operator", {
      params: {
        id: eventId,
      },
    });
    if (response.status === 200) {
      return response.data; // Return the event details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching event details:", error);
    throw error;
  }
};

export const buyTicketAPI = async (orderDetails) => {
  try {
    const response = await config.post("/ticket/BuyTicket", orderDetails);
    if (response.status === 200) {
      return response.data; // Return the created order details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error creating event order:", error);
    throw error;
  }
};

export const getAllProfileTransactionAPI = async (
  pageNumber = 1,
  pageSize = 10
) => {
  try {
    const response = await config.get("/payment/GetAllProfileTransaction", {
      params: {
        PageNumber: pageNumber,
        PageSize: pageSize,
      },
    });
    if (response.status === 200) {
      const pagination = JSON.parse(response.headers["x-pagination"]);
      return {
        transactions: response.data, // Adjust based on actual response structure
        pagination, // Contains TotalCount, PageSize, CurrentPage, TotalPages, HasNext, HasPrevious
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching profile transactions:", error);
    throw error;
  }
};

export const getAllProfileTicketAPI = async (pageNumber = 1, pageSize = 5) => {
  try {
    const response = await config.get("/ticket/GetAllOwnTicketInfo", {
      params: {
        PageNumber: pageNumber,
        PageSize: pageSize,
      },
    });
    if (response.status === 200) {
      const pagination = JSON.parse(response.headers["x-pagination"]);
      return {
        tickets: response.data,
        pagination, // Contains TotalCount, PageSize, CurrentPage, TotalPages, HasNext, HasPrevious
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw error;
  }
};

export const getAllStallBuyAPI = async (pageNumber = 1, pageSize = 5) => {
  try {
    const response = await config.get("/eventstall/GetEventStallCurrentUser", {
      params: {
        PageNumber: pageNumber,
        PageSize: pageSize,
      },
    });
    if (response.status === 200) {
      const pagination = JSON.parse(response.headers["x-pagination"]);
      return {
        stalls: response.data,
        pagination, // Contains TotalCount, PageSize, CurrentPage, TotalPages, HasNext, HasPrevious
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching stalls:", error);
    throw error;
  }
};

export const searchEventAPI = async (query) => {
  try {
    const response = await config.get("/event/SearchEventByName", {
      params: {
        name: query, // Ensure this matches the backend parameter name
      },
    });
    if (response.status === 200) {
      return response.data; // Return the search results
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error searching for events:", error);
    throw error;
  }
};

export const createEventAPI = async (eventData, category) => {
  try {
    const response = await config.post("/event/CreateEvent", eventData, {
      params: {
        category: category, // Pass category as a query parameter
      },
    });
    if (response.status === 200) {
      return response.data; // Return the created event data
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

export const buyStallAPI = async (eventDetailId, stallnumber) => {
  try {
    const url = `/eventstall/AddEventStall?eventDetailId=${encodeURIComponent(
      eventDetailId
    )}&stallnumber=${encodeURIComponent(stallnumber)}`;

    console.log("Sending request to URL:", url); // Log the URL for debugging

    const response = await config.post(url);

    if (response.status === 200) {
      return response.data; // Return the created order details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error creating event order:", error);
    throw error;
  }
};

export const getAllProfileStallAPI = async (pageNumber = 1, pageSize = 5) => {
  try {
    const response = await config.get("/eventstall/GetEventStallCurrentUser", {
      params: {
        PageNumber: pageNumber,
        PageSize: pageSize,
      },
    });
    if (response.status === 200) {
      const pagination = JSON.parse(response.headers["x-pagination"]);
      return {
        stalls: response.data,
        pagination, // Contains TotalCount, PageSize, CurrentPage, TotalPages, HasNext, HasPrevious
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw error;
  }
};

export const getEventAnalysisAPI = async (eventId) => {
  try {
    const response = await config.get(`/event-analysis/${eventId}`);
    if (response.status === 200) {
      return response.data; // Return the event details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching event analysis:", error);
    throw error;
  }
};

export const putEventNextPhaseAPI = async (eventId) => {
  try {
    const response = await config.put(
      `/event/UpdateEventNextPhase?id=${eventId}`
    );
    if (response.status === 200) {
      return response.data; // Return the event details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error updating event to the next phase:", error);
    throw error;
  }
};

export const putUpdateEventAPI = async (eventData, eventId, category) => {
  try {
    const response = await config.put("/event/UpdateEvent", eventData, {
      params: {
        id: eventId,
        category: category, // Pass category as a query parameter
      },
    });
    if (response.status === 200) {
      return response.data; // Return the created event data
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

export const createEventDetailsAPI = async (eventData) => {
  try {
    const response = await config.post(
      "/event-details/CreateEventDetail",
      eventData
    );
    if (response.status === 200) {
      return response.data; // Return the created event data
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

export const putUpdateEventDetailsAPI = async (eventDetailsId, eventData) => {
  try {
    const response = await config.put(
      "/event-details/UpdateEventDetail",
      JSON.stringify(eventData),
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          id: eventDetailsId,
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error updating event:", error);
    throw error;
  }
};

export const getLocationAPI = async () => {
  try {
    const response = await config.get(`/location`);
    if (response.status === 200) {
      return response.data; // Return the event details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching event analysis:", error);
    throw error;
  }
};
export const addLocationAPI = async (locationData) => {
  try {
    const response = await config.post(`/location/AddLocation`, locationData);
    if (response.status === 200) {
      return response.data; // Return the event details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching event analysis:", error);
    throw error;
  }
};
export const updateLocationAPI = async (locationId) => {
  try {
    const response = await config.put(`/location/UpdateLocation`, {
      params: { locationId },
    });
    if (response.status === 200) {
      return response.data; // Return the event details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching event analysis:", error);
    throw error;
  }
};

export const CancelEventAPI = async (eventId) => {
  try {
    const response = await config.delete("/event/CancelEvent", {
      params: {
        id: eventId,
      },
    });
    if (response.status === 200) {
      return response.data; // Return the event details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching event details:", error);
    throw error;
  }
};

export const removeAssigneeAPI = async (accountId, eventDetailId) => {
  try {
    const response = await config.delete("/eventassignee", {
      params: {
        eventDetailId,
        accountId,       
      },
    });
    if (response.status === 200) {
      return response.data; // Return the event details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching event details:", error);
    throw error;
  }
};

export const removeTaskAPI = async (taskId, eventDetailsId) => {
  try {
    const response = await config.delete("/task/DeleteTask", {
      params: {
        taskId,
        eventDetailsId,
      },
    });
    if (response.status === 200) {
      return response.data; // Return the event details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching event details:", error);
    throw error;
  }
};

export const deleteEventAPI = async (eventId) => {
  try {
    const response = await config.delete("/event/DeleteEvent", {
      params: {
        id: eventId,
      },
    });
    if (response.status === 200) {
      return response.data; // Return the event details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching event details:", error);
    throw error;
  }
};

export const DeleteEventAPI = async (eventDetailsId) => {
  try {
    const response = await config.delete("/event-details/DeleteEventDetail", {
      params: {
        id: eventDetailsId,
      },
    });
    if (response.status === 200) {
      return response.data; // Return the event details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching event details:", error);
    throw error;
  }
};

export const getAllStallCurrentEvent = async (eventDetailId) => {
  try {
    const response = await config.get("/eventstall/GetAllStallCurrentEvent", {
      params: {
        eventDetailId,
      },
    });
    if (response.status === 200) {
      return response.data; // Return the event details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching event details:", error);
    throw error;
  }
};

export const getAllEventCheckInAPI = async (pageNumber = 1, pageSize = 5) => {
  try {
    const response = await config.get(
      "/ticket/GetAllEventCheckedInCurrentUser",
      {
        params: {
          PageNumber: pageNumber,
          PageSize: pageSize,
        },
      }
    );
    if (response.status === 200) {
      const pagination = JSON.parse(response.headers["x-pagination"]);
      return {
        tickets: response.data,
        pagination, // Contains TotalCount, PageSize, CurrentPage, TotalPages, HasNext, HasPrevious
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw error;
  }
};

export const getAllEventAssigneeAPI = async (eventDetailId) => {
  try {
    const response = await config.get(`/eventassignee/GetAllByCurrentEvent`, {
      params: {
        eventdetailid: eventDetailId,
      },
    });
    if (response.status === 200) {
      return {
        assignee: response.data,
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw error;
  }
};

export const getAccountStaffAPI = async () => {
  try {
    const response = await config.get(`/user/management/GetAllStaffAccount`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Staff:", error);
    throw error;
  }
};

export const postAddEventAssignee = async (accountId, eventDetailId) => {
  try {
    const url = `/eventassignee/AddEventAssignee?accountId=${encodeURIComponent(
      accountId
    )}&eventDetailId=${encodeURIComponent(eventDetailId)}`;

    console.log("Sending request to URL:", url); // Log the URL for debugging

    const response = await config.post(url);

    if (response.status === 200) {
      return response.data; // Return the created order details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error creating event order:", error);
    throw error;
  }
};

export const postPledgeSponsoringAPI = async (pledgeData) => {
  try {
    const response = await config.post(
      "/agreement/PledgeSponsoringEvent",
      pledgeData
    );
    if (response.status === 200) {
      return response.data; // Return the created event data
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

export const getAllSponsorAgreementAPI = async (
  pageNumber = 1,
  pageSize = 5
) => {
  try {
    const response = await config.get("/agreement/GetAllAgreementCurrentUser", {
      params: {
        PageNumber: pageNumber,
        PageSize: pageSize,
      },
    });
    if (response.status === 200) {
      const pagination = JSON.parse(response.headers["x-pagination"]);
      return {
        sponsorShip: response.data,
        pagination, // Contains TotalCount, PageSize, CurrentPage, TotalPages, HasNext, HasPrevious
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw error;
  }
};

export const postSposoringEventAPI = async (sponsorData) => {
  try {
    const response = await config.post("/sponsor/SponsoringEvent", sponsorData);
    if (response.status === 200) {
      return response.data; // Return the created event data
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

export const getSponsoredEventByUserAPI = async (
  pageNumber = 1,
  pageSize = 5
) => {
  try {
    const response = await config.get("sponsor/GetAllSponsorEventCurrentUser", {
      params: {
        PageNumber: pageNumber,
        PageSize: pageSize,
      },
    });

    if (response.status === 200) {
      const pagination = JSON.parse(response.headers["x-pagination"]);
      return {
        data: response.data,
        pagination, // Contains TotalCount, PageSize, CurrentPage, TotalPages, HasNext, HasPrevious
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching sponsored events:", error);
    throw error;
  }
};

export const getAllStallCurrentEventAPI = async (eventDetailId) => {
  try {
    const response = await config.get("/eventstall/GetAllStallCurrentEvent", {
      params: { eventDetailId: eventDetailId },
    });

    if (response.status === 200) {
      return response.data; // Return the data directly
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching stall current event:", error);
    throw error;
  }
};

export const getEventAllTicketInfoAPI = async (eventDetailId) => {
  try {
    const response = await config.get("/ticket/GetEventAllTicketInfo", {
      params: { eventId: eventDetailId },
    });

    if (response.status === 200) {
      return response.data; // Return the data directly
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching event all ticket info:", error);
    throw error;
  }
};

export const getAccountById = async (accountId) => {
  try {
    const response = await config.get("/user/management/GetById", {
      params: {
        id: accountId,
      },
    });
    if (response.status === 200) {
      return response.data; // Return the event details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching event details:", error);
    throw error;
  }
};

export const getTasksByEventDetailIdAPI = async (eventDetailId) => {
  try {
    const response = await config.get("/task/GetAllByEventDetailId", {
      params: { eventDetailId },
    });

    if (response.status === 200) {
      return response.data; // Return the data directly
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching event all ticket info:", error);
    throw error;
  }
};

export const postAddTaskAPI = async (taskData) => {
  try {
    const response = await config.post("/task/AddTask", taskData);
    if (response.status === 200) {
      return response.data; // Return the created event data
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

export const putUpdateTaskAPI = async (taskId, taskData) => {
  try {
    const response = await config.put(
      `/task/UpdateTask?id=${taskId}`,
      taskData
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const checkinEventAPI = async (ticketId, eventDetailId) => {
  try {
    const response = await config.get("/ticket/Checkin", {
      params: {
        ticketId: ticketId,
        eventDetailId: eventDetailId,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error checking event:", error);
    throw error;
  }
};

export const getAllTaskByUsernameAPI = async (username) => {
  try {
    const response = await config.get("/task/GetAllByStaffUsername", {
      params: {
        username: username,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching event details:", error);
    throw error;
  }
};

export const putUpdateTaskByUsernameAPI = async (
  taskId,
  status,
  actualCost
) => {
  try {
    const response = await config.put(
      `/task/UpdateTaskStatus?id=${taskId}&Status=${status}&ActualCost=${actualCost}`
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error updating task status:", error);
    throw error;
  }
};

export const getTicketInforAPI = async (ticketId) => {
  try {
    const response = await config.get(
      `/ticket/GetTicketInfo?ticketId=${ticketId}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching stalls:", error);
    throw error;
  }
};

export const postAddFeedbackAPI = async (feedbackData) => {
  try {
    const response = await config.post(`/feedback`, feedbackData);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching stalls:", error);
    throw error;
  }
};

export const sendconfirmEmailAPI = async () => {
  try {
    const response = await config.post(`/auth/SendConfirmationEmail`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Staff:", error);
    throw error;
  }
};

export const getAllStafflAPI = async () => {
  try {
    const response = await config.get(`/user/management/GetAllStaffAccount`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Staff:", error);
    throw error;
  }
};

export const getSponsoredCurrentEventAPI = async (
  eventId,
  pageNumber = 1,
  pageSize = 5
) => {
  try {
    const response = await config.get(
      "/agreement/GetAllAgreementCurrentEvent",
      {
        params: {
          eventId,
          PageNumber: pageNumber,
          PageSize: pageSize,
        },
      }
    );

    if (response.status === 200) {
      const pagination = JSON.parse(response.headers["x-pagination"]);
      return {
        data: response.data,
        pagination, // Contains TotalCount, PageSize, CurrentPage, TotalPages, HasNext, HasPrevious
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching sponsored events:", error);
    throw error;
  }
};

export const postRangeEventAssignee = async (accountData, eventDetailId) => {
  try {
    const response = await config.post(
      `/eventassignee/AddRangeEventAssignee`,
      accountData,
      {
        params: { eventDetailId },
      }
    );

    if (response.status === 200) {
      return response.data; // Return the created order details
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error creating event order:", error);
    throw error;
  }
};

export const getAllAccountAPI = async (pageNumber, pageSize) => {
  try {
    const response = await config.get(`/user/management/GetAllAccount`, {
      params: {
        pageNumber,
        pageSize,
      },
    });
    if (response.status === 200) {
      const pagination = JSON.parse(response.headers["x-pagination"]);
      return {
        data: response.data,
        pagination,
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
};

export const signupInternalAPI = async (role, userData) => {
  try {
    const response = await config.post("/auth/SignUp-Inernal", userData, {
      params: { role },
    });

    if (response.status === 200) {
      return response;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const GetAllAssigneeDetailCurrentUserAPI = async (
  pageNumber,
  pageSize
) => {
  try {
    const response = await config.get(
      "/eventassignee/GetAllAssigneeDetailCurrentUser",
      {
        params: {
          PageNumber: pageNumber,
          PageSize: pageSize,
        },
      }
    );

    if (response.status === 200) {
      const pagination = JSON.parse(response.headers["x-pagination"]);
      return {
        data: response.data,
        pagination, // Contains TotalCount, PageSize, CurrentPage, TotalPages, HasNext, HasPrevious
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching sponsored events:", error);
    throw error;
  }
};

export const unactivateAccountAPI = async (accountId) => {
  try {
    const response = await config.delete("/user/management/UnactivateAccount", {
      params: { id: accountId },
    });

    if (response.status === 200) {
      return response;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const reactivateAccountAPI = async (accountId) => {
  try {
    const response = await config.patch(`/user/management/ReactivateAccount?id=${accountId}`);

    if (response.status === 200) {
      return response;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const updateAllAccountlAPI = async (accountId, accountData) => {
  try {
    
    const response = await config.put("/user/management/UpdateAllAccount", accountData, {
      params: { id: accountId },
    });

    if (response.status === 200) {
      return response;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const getAllUserTransactionAPI = async (
  accountId,
  pageNumber,
  pageSize
) => {
  try {
    const response = await config.get(
      "/payment/GetAllUserTransaction",
      {
        params: {
          PageNumber: pageNumber,
          PageSize: pageSize,
          id: accountId,
        },
      }
    );

    if (response.status === 200) {
      const pagination = JSON.parse(response.headers["x-pagination"]);
      return {
        data: response.data,
        pagination, // Contains TotalCount, PageSize, CurrentPage, TotalPages, HasNext, HasPrevious
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching sponsored events:", error);
    throw error;
  }
};

export const getAllEventFeedBackAPI = async (
  eventDetailID,
  pageNumber,
  pageSize
) => {
  try {
    const response = await config.get(
      "/feedback/GetByEventDetail",
      {
        params: {
          eventDetailID,
          PageNumber: pageNumber,
          PageSize: pageSize,
          
        },
      }
    );

    if (response.status === 200) {
      const pagination = JSON.parse(response.headers["x-pagination"]);
      return {
        data: response.data,
        pagination, // Contains TotalCount, PageSize, CurrentPage, TotalPages, HasNext, HasPrevious
      };
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching sponsored events:", error);
    throw error;
  }
};
