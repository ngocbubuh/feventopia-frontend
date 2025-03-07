import React from "react";

function FAQ() {
    return (
        <div className="wrapper">
            <div className="breadcrumb-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-10">
                            <div className="barren-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Frequently asked questions</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="event-dt-block p-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="main-title checkout-title text-center">
                                <h3>Frequently asked questions</h3>
                                <p className="mb-0">Find answers to the common questions asked about FEventopia.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="main-card mt-5">
                                <div className="bp-title">
                                    <h4>Table of contents</h4>
                                </div>
                                <div className="bp-content faq-widget-content">
                                    <ul className="faq-widget-links pt_30">
                                        <li><a href="#FAQforOrganisers">FAQ for Organisers</a></li>
                                        <li><a href="#FAQforAttendees">FAQ for Attendees</a></li>
                                    </ul>
                                    <div className="cant-ans-box pt_30">
                                        <h4><i className="fa-solid fa-circle-question me-2 fs-18"></i>Can't find an answer?</h4>
                                        <a href="help_center.html">Visit Help Center</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="faq-scrollspy">
                                <div className="faq-accordion pt-0 p-2 mt-5" id="FAQforOrganisers">
                                    <div className="faq-accordion-title">
                                        <h4>FAQ for Organisers</h4>
                                    </div>
                                    <div className="accordion" id="accordionFAQforOrganisers">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading1">
                                                <button className="accordion-btn pe-0 ps-0" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse1" aria-expanded="true" aria-controls="panelsOrgnaisersOpen-collapse1">
                                                    What types of events can I set up through FEventopia?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse1" className="accordion-collapse collapse show" aria-labelledby="panelsOrgnaisersOpen-heading1" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>Talkshow, âm nhạc, cuộc thi, festival.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading2">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse2" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse2">
                                                    Does FEventopia offer event management or customer service for my event?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse2" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading2" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>Now we're not supported yet</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading3">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse3" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse3">
                                                    Can my event’s page and my profile reflect my company’s branding?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse3" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading3" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>Yes you can.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading4">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse4" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse4">
                                                    How soon you after my event should I expect to get paid?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse4" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading4" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>After we calculate the revenue.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading5">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse5" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse5">
                                                    Which platform will FEventopia use to host my online event and will I have to pay any external charges for my online event?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse5" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading5" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>We refer using zoom and until use have to pay fee to unlimited the number of adtendees.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading6">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse6" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse6">
                                                    Can I invite speakers to my online event?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse6" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading6" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>Yes but you need to said to the system you will invite who that we can manage.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading7">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse7" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse7">
                                                    Can I add multiple sessions to my online event?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse7" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading7" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>Yes.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading8">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse8" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse8">
                                                    Can I add in any special requirements at the time of booking?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse8" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading8" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>Now we're not supported yet</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading9">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse9" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse9">
                                                    Can I reserve my event for a selected group of people?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse9" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading9" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>Now we not support yet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading10">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse10" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse10">
                                                    Can I limit the number of tickets available to each person?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse10" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading10" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>Our system limit the number of ticket each person can buy at the same time 5 tickets.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading11">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse11" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse11">
                                                    What is the maximum number of people that I can host?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse11" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading11" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>Depend on your location.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading12">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse12" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse12">
                                                    Can I easily share my event's page?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse12" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading12" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>No.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading14">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse14" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse14">
                                                    How do I edit my event after it has been published?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse14" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading14" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>You can contact to our admin to adjust the information.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading15">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse15" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse15">
                                                    Does FEventopia charge for free events?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse15" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading15" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>Yes but it depend on the sponsor and event operator.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading16">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse16" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse16">
                                                    Can I change my subscription?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse16" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading16" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>You need to contact our staff to change the description.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading17">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse17" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse17">
                                                    What payment options do you accept?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse17" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading17" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>Now we only accepct the VNpay method.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading18">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse18" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse18">
                                                    Where can I get a report of my event?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse18" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading18" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>You can go to the feedback to feedback the event.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading19">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse19" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse19">
                                                    Can I arrange printed items such as tickets and programs through FEventopia?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse19" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading19" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>Now we're not supported yet</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading20">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse20" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse20">
                                                    Do my customers need to make an account with FEventopia?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse20" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading20" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>Yes.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsOrgnaisersOpen-heading21">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsOrgnaisersOpen-collapse21" aria-expanded="false" aria-controls="panelsOrgnaisersOpen-collapse21">
                                                    Where do I get help if I need it?
                                                </button>
                                            </h2>
                                            <div id="panelsOrgnaisersOpen-collapse21" className="accordion-collapse collapse" aria-labelledby="panelsOrgnaisersOpen-heading21" data-bs-parent="#accordionFAQforOrganisers">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>You can go to the helpCenter to see more detail.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="faq-accordion faq-attendees-accordion pt-0 p-2" id="FAQforAttendees">
                                    <div className="faq-accordion-title">
                                        <h4>FAQ for Attendees</h4>
                                    </div>
                                    <div className="accordion" id="accordionFAQforAttendees">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsAttendeesOpen-heading1">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsAttendeesOpen-collapse1" aria-expanded="true" aria-controls="panelsAttendeesOpen-collapse1">
                                                    Will my details be shared with any third parties?
                                                </button>
                                            </h2>
                                            <div id="panelsAttendeesOpen-collapse1" className="accordion-collapse collapse" aria-labelledby="panelsAttendeesOpen-heading1" data-bs-parent="#accordionFAQforAttendees">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>No, we will protected personal information.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordionpanelsAttendeesOpen-header" id="panelsAttendeesOpen-heading2">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsAttendeesOpen-collapse2" aria-expanded="false" aria-controls="panelsAttendeesOpen-collapse2">
                                                    Do I need an account to buy tickets from FEventopia?
                                                </button>
                                            </h2>
                                            <div id="panelsAttendeesOpen-collapse2" className="accordion-collapse collapse" aria-labelledby="panelsAttendeesOpen-heading2" data-bs-parent="#accordionFAQforAttendees">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>Yes.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsAttendeesOpen-heading4">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsAttendeesOpen-collapse4" aria-expanded="false" aria-controls="panelsAttendeesOpen-collapse4">
                                                    Why can’t I purchase more than a certain amount of tickets?
                                                </button>
                                            </h2>
                                            <div id="panelsAttendeesOpen-collapse4" className="accordion-collapse collapse" aria-labelledby="panelsAttendeesOpen-heading4" data-bs-parent="#accordionFAQforAttendees">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>Because FEventopia limit the number of ticker each person can buy at the same time is 5.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsAttendeesOpen-heading5">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsAttendeesOpen-collapse5" aria-expanded="false" aria-controls="panelsAttendeesOpen-collapse5">
                                                    How do I inform my organiser of my special requirements for an event?
                                                </button>
                                            </h2>
                                            <div id="panelsAttendeesOpen-collapse5" className="accordion-collapse collapse" aria-labelledby="panelsAttendeesOpen-heading5" data-bs-parent="#accordionFAQforAttendees">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>You can inform when you are paticipate at the event or you can mail to staff early.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsAttendeesOpen-heading6">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsAttendeesOpen-collapse6" aria-expanded="false" aria-controls="panelsAttendeesOpen-collapse6">
                                                    When will I receive my tickets?
                                                </button>
                                            </h2>
                                            <div id="panelsAttendeesOpen-collapse6" className="accordion-collapse collapse" aria-labelledby="panelsAttendeesOpen-heading6" data-bs-parent="#accordionFAQforAttendees">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>After you pay for that ticket successful, you can receive your ticket via email.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsAttendeesOpen-heading9">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsAttendeesOpen-collapse9" aria-expanded="false" aria-controls="panelsAttendeesOpen-collapse9">
                                                    Do I need to print my tickets off?
                                                </button>
                                            </h2>
                                            <div id="panelsAttendeesOpen-collapse9" className="accordion-collapse collapse" aria-labelledby="panelsAttendeesOpen-heading9" data-bs-parent="#accordionFAQforAttendees">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>No, we will scan your ticket QR code.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsAttendeesOpen-heading10">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsAttendeesOpen-collapse10" aria-expanded="false" aria-controls="panelsAttendeesOpen-collapse10">
                                                    Can I cancel or change my booking?
                                                </button>
                                            </h2>
                                            <div id="panelsAttendeesOpen-collapse10" className="accordion-collapse collapse" aria-labelledby="panelsAttendeesOpen-heading10" data-bs-parent="#accordionFAQforAttendees">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>Now we not have supported yet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsAttendeesOpen-heading11">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsAttendeesOpen-collapse11" aria-expanded="false" aria-controls="panelsAttendeesOpen-collapse11">
                                                    I have lost my tickets, can you resend them?
                                                </button>
                                            </h2>
                                            <div id="panelsAttendeesOpen-collapse11" className="accordion-collapse collapse" aria-labelledby="panelsAttendeesOpen-heading11" data-bs-parent="#accordionFAQforAttendees">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>You need to inform the staff early, then we will send you a new mail with same QR code.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsAttendeesOpen-heading12">
                                                <button className="accordion-btn pe-0 ps-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsAttendeesOpen-collapse12" aria-expanded="false" aria-controls="panelsAttendeesOpen-collapse12">
                                                    Where can I go to get some help?
                                                </button>
                                            </h2>
                                            <div id="panelsAttendeesOpen-collapse12" className="accordion-collapse collapse" aria-labelledby="panelsAttendeesOpen-heading12" data-bs-parent="#accordionFAQforAttendees">
                                                <div className="accordion-body pt-0 pe-0 ps-0">
                                                    <p>For any question, please contact our support team at email address or phone number.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;