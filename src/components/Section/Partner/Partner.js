import React, { useState } from 'react';
import PartnerSlider from './PartnerSlider';
import SliderLogo from '../Partner/PartnerLogo'


const Partner = () => {
	const [logosData, setlogosData] = useState(SliderLogo);
	return (
		<>
			<section id='partners' className='section_padding'>
				<div className="container">
					<div className='sectionTitle'>
						<h2 className="secTitle">Brands</h2>
						<p className="font-16 font-lato mb-4 secDetails">
							It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
							layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
						</p>
					</div>
					
					<PartnerSlider sendCompanyLogo={logosData} />
				</div>
			</section>
		</>
	);
};

export default Partner;
