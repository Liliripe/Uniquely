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
                        banner={detail.node.featured_media.localFile.childImageSharp.fluid.src}
                    />

                    <AboutContent
                        title="Welcome to Uniquely"
                        subtitle="Lorem ipsum dolor"
                        image="https://madebyrossi.com/client/wordpress/wp-content/uploads/2021/03/about.jpg"
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
