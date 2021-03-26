import React from 'react'

import Breadcrumbs from './Breadcrumbs'
import AboutContent from './AboutContent'

const About = ({ details }) => {
    return (
        <>
            {details.map(detail =>
                <>
                    <Breadcrumbs 
                        name={detail.node.title}
                        banner={detail.node.acf.banner_image.localFile.childImageSharp.fluid.src}
                    />

                    <AboutContent
                        title="Welcome to Uniquely"
                        subtitle="Lorem ipsum dolor"
                        image={detail.node.featured_media.localFile.childImageSharp.fluid.src}
                        buttonText="Contact Us"
                        buttonLink="/contact"
                    >
                        {detail.node.content}
                    </AboutContent>
                </>
            )}
        </>
    )
}

export default About
