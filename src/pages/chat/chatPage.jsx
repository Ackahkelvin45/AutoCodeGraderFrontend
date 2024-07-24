import { NavandSidebar } from "../../components/dashboard/lectuerer/navBarAndSideBar"

function ChatPage() {
  return (
    
<div className="container-fluid px-xl-4 pb-3 pb-lg-4 px-4">
    <section   className=" offcanvas-enabled-start row full-section " style={{transition:'all .6s, transform .6s'}}>
    <div className="col-12">
    <NavandSidebar/>
    <div    className="border-bottom mb-5 pt-5">
    <main className="content mb-3 mt-5">
    <div className="container p-0">

		<h4 className="h4 mb-3">Intoduction to python</h4>

		<div className="card">
			<div className="row g-0">
				<div className="col-12 col-lg-5 col-xl-3 border-right">

					<div className="px-4 d-none d-md-block">
						<div className="d-flex align-items-center">
							<div className="flex-grow-1">
								<input type="text" className="form-control my-3" placeholder="Search..."/>
							</div>
						</div>
					</div>

					<a href="#" className="list-group-item list-group-item-action border-0">

						<div className="d-flex align-items-start">
							<img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40"/>
							<div className="flex-grow-1 mx-2 ">
                            <p className='mb-0 '>Ackah Kelvin</p>
								
								<div className="small"><span className=''><div className="badge bg-success text-success rounded-pill  fs-xs "></div></span><span className="fas fa-circle text-sucess chat-online">Online</span> </div>
							</div>
						</div>
					</a>
					<a href="#" className="list-group-item list-group-item-action border-0">
						<div className="d-flex align-items-start">
							<img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle mr-1" alt="William Harris" width="40" height="40"/>
							
                            <div className="flex-grow-1 mx-2 ">
                            <p className='mb-0 '>Amoah Daniel</p>
								
								<div className="small"><span className=''><div className="badge bg-success text-success rounded-pill  fs-xs "></div></span><span className="fas fa-circle text-sucess chat-online">Online</span> </div>
							</div>
						</div>
					</a>
					<a href="#" className="list-group-item list-group-item-action border-0">
						<div className="d-flex align-items-start">
							<img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
							<div className="flex-grow-1 mx-2 ">
                            <p className='mb-0 '>phil thompson</p>
								
								<div className="small"><span className=''><div className="badge bg-success text-success rounded-pill  fs-xs "></div></span><span className="fas fa-circle text-sucess chat-online">Online</span> </div>
							</div>
						</div>
					</a>
				
					<hr className="d-block d-lg-none mt-1 mb-0"/>
				</div>
				<div className="col-12 col-lg-7 col-xl-9">
					<div className="py-2 px-4 border-bottom d-none d-lg-block">
						<div className="d-flex align-items-center py-1">
							<div className="position-relative">
								<img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
							</div>
							<div className="flex-grow-1 pl-3">
								<strong>phil  thompson</strong>
								<div className="text-muted small"><em>Typing...</em></div>
							</div>
							<div>

								<button className="btn btn-light border btn-lg px-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="feather feather-more-horizontal feather-lg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
							</div>
						</div>
					</div>

					<div className="position-relative">
						<div className="chat-messages p-4" style={{height:"400px",overflowY:"auto"}}>

							<div className="chat-message-right pb-4">
								<div>
									<img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
									<div className="text-muted small text-nowrap mt-2">2:33 am</div>
								</div>
								<div className=" shadow border   d-flex  align-items-end flex-column rounded py-2 px-3 m-1 chat-sent">
									<strong className="font-weight-bold mb-1 ">You</strong>
									Did Dr peasah say we should use switch or if clause
								</div>
							</div>

							



                            <div className="chat-message-right pb-4">
								<div>
									<img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
									<div className="text-muted small text-nowrap mt-2">2:33 am</div>
								</div>
								<div className=" shadow border flex-shrink-1   d-flex  align-items-end flex-column rounded py-2 px-3 m-1 chat-sent">
									<strong className="font-weight-bold  ">You</strong>

                                    
                                    <div className=''>
                                    I used  if clause
                                    </div>
									
								</div>
							</div>

							

						
					

							

							<div className="chat-message-left pb-4">
								<div>
									<img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
									<div className="text-muted small text-nowrap mt-2">2:39 am</div>
								</div>
								<div className=" d-flex  align-items-start  flex-column bg-secondary rounded py-2 px-3 ml-3">
									<div className="font-weight-bold mb-1">phil thompson</div>
									my code has a bug so i am using switch instead of using if clause
								</div>
							</div>

							

						
                            <div className="chat-message-right pb-4">
								<div>
									<img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
									<div className="text-muted small text-nowrap mt-2">2:33 am</div>
								</div>
								<div className=" shadow border flex-shrink-1   d-flex  align-items-end flex-column rounded py-2 px-3 m-1 chat-sent">
									<strong className="font-weight-bold  ">You</strong>

                                    
                                    <div className=''>
                                    okay
                                    </div>
									
								</div>
							</div>


                            <div className="chat-message-right pb-4">
								<div>
									<img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
									<div className="text-muted small text-nowrap mt-2">2:33 am</div>
								</div>
								<div className=" shadow border flex-shrink-1   d-flex  align-items-end flex-column rounded py-2 px-3 m-1 chat-sent">
									<strong className="font-weight-bold  ">You</strong>

                                    
                                    <div className=''>
                                   sure
                                    </div>
									
								</div>
							</div>


						

						</div>
					</div>

					<div className="flex-grow-0 py-3 px-4 border-top">
						<div className="input-group">
							<input type="text" className="form-control" placeholder="Type your message"/>
							<button className="btn btn-primary">Send</button>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</main>
    </div>
    </div>
    </section>
    </div>






  )
}

export default ChatPage