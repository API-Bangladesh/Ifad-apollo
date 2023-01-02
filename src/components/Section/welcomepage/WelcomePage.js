import React from 'react';
import HomeLogo from '../../../asset/images/logo/LOGO.png'
import HomeApolloLogo from '../../../asset/images/homepage/apolloLogo.png'
import HomeRoyelLogo from '../../../asset/images/homepage/royalLogo.png'
import HomeTyre from '../../../asset/images/homepage/tayer-bg.png'
import HomeMotorcycle from '../../../asset/images/homepage/motorcycle-bg.png'
import Footer from '../Footer/Footer';

const WelcomePage = () => {
	return (
		<>
			<section className="homepage">
				<div className="welcome">
					<div className="logoBar">
						<img src={HomeLogo} alt="logo" />
					</div>

					<div className="websiteLink">
						<div className="row align-items-center">
							<div className="col-md-6 col-lg-6">
								<div className="item1">
									<img className="tayerImg" src={HomeTyre} alt="img" />
									<div className="logoAndBtn">
										<img className="apolloLogo" src={HomeApolloLogo} alt="img" />
										<p className="mt-3 mt-md-5">
											<a className="goBtn" target="_blank" href="/home">
												<svg width="75" height="14" viewBox="0 0 75 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M64.5 0.910837L74.0687 7L64.5 13.0892V0.910837Z" stroke="#3F017A" />
													<line x1="64" y1="7.5" y2="7.5" stroke="#3F017A" />
												</svg>
											</a>
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-6">
								<div className="item2">
									<img className="motorcycleImg" src={HomeMotorcycle} alt="img" />
									<div className="logoAndBtn">
										<img className="royalLogo" src={HomeRoyelLogo} alt="img" />
										<p className="mt-3 mt-md-5">
											<a className="goBtn exColor" target="_blank" href="#">
												<svg width="75" height="14" viewBox="0 0 75 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M64.5 0.910837L74.0687 7L64.5 13.0892V0.910837Z" stroke="#EE3235" />
													<line x1="64" y1="7.5" y2="7.5" stroke="#EE3235" />
												</svg>
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
            <Footer/>
		</>
	);
};

export default WelcomePage;
