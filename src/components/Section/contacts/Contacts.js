import React from 'react';
// import Mail from '../../../asset/images/contact/mail.png'
import { BiUser } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosCall } from 'react-icons/io';
import { BsPencil, BsArrowRight } from 'react-icons/bs';

const Contacts = () => {
	return (
		<>
			<section id='contacts'>
				<div className="container">
						<form action="">
							<div className="row ps-0 ps-lg-5">
								<div className="col-lg-4 col-md-6">
									<div className="mb-3">
										<BiUser className='icon'/>
										<input type="text" className="form-control rounded-1 b-shadow" placeholder="Full Name" aria-describedby="emailHelp"/>
									</div>
									<div className="mb-3">
										<AiOutlineMail className='icon'/>
										<input type="email" className="form-control rounded-1 b-shadow" aria-describedby="emailHelp" placeholder="Email"/>
									</div>
									<div className="mb-3">
										{/* <HiPhone className='icon'/> */}
										<IoIosCall className='icon'/>
										<input type="number" className="form-control rounded-1 b-shadow" aria-describedby="emailHelp" placeholder="Number"/>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									{/* <div className="form-floating mb-3">
                                        <BsPencil className='icon2'/>
										<textarea className="form-control rounded-1" placeholder="Leave a comment here"  rows="20"></textarea>
									</div> */}
									<div className="mb-3">
										<BsPencil className='icon2'/>
										<textarea className="form-control" id="" rows="3" placeholder="Number"></textarea>
									</div>
									<button type="submit" className="btn btn-primary rounded-1 bg-danger border-0">
										Submit  <BsArrowRight className=''/>
									</button>
								</div>
                                {/* <div className="col-lg-4">
                                    <img src={Mail} alt="" />
                                </div> */}
							</div>
						</form>
				</div>
			</section>
		</>
	);
};

export default Contacts;
