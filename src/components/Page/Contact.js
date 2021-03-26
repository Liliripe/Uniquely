import React from 'react'

import Breadcrumbs from './Breadcrumbs'
import ContactContent from './ContactContent'

const Contact = ({ info }) => {
    return (
        <>
            {info.map(infos =>
                <>
                    <Breadcrumbs 
                        name={infos.node.title}
                        banner={infos.node.acf.banner_image.localFile.childImageSharp.fluid.src}
                    />

                    <ContactContent
                        title="Our Info"
                        image={infos.node.featured_media.localFile.childImageSharp.fluid.src}
                    >
                        {infos.node.content}
                    </ContactContent>
                </>
            )}
        </>
    )
}

export default Contact
