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
                        //banner={infos.node.featured_media.localFile.childImageSharp.fluid.src}
                        banner="https://madebyrossi.com/client/wordpress/wp-content/uploads/2020/11/featured.jpg"
                    />

                    <ContactContent
                        title="Our Info"
                        image="https://madebyrossi.com/client/wordpress/wp-content/uploads/2021/03/contact-img.jpg"
                    >
                        {infos.node.content}
                    </ContactContent>
                </>
            )}
        </>
    )
}

export default Contact
