import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import Wrapper from '../Wrapper'
import { StyledRow, StyledCol, Title, Content, StyledIcon, StyledForm } from './style'
 
class ContactContent extends Component {
  static defaultProps = {
    center: {
      lat: 32.2939081,
      lng: -64.7850614
    },
    zoom: 17
  }
 
  render() {
    return (
      <>
        <Wrapper>
            <StyledRow>
                <StyledCol xs={12} md={6}>
                    <Title>{this.props.title}</Title>
                    <Content dangerouslySetInnerHTML={{ __html: this.props.children }} />
                    <ul>
                        <li>
                            <StyledIcon icon={faMapMarkerAlt} /> 
                            3rd Floor, Sofia House, 48 Church Street, Hamilton HM 12
                        </li>
                        <li>
                            <StyledIcon icon={faEnvelope} /> 
                            info@uniquely.io
                        </li>
                    </ul>
                </StyledCol>

                <StyledCol xs={12} md={6} style={{width: '100%', height: '550px'}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyCVLd9GjC6D-875ow7-6bw0cHjojbaq_oU' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    />
                </StyledCol>
            </StyledRow>

            <StyledRow>
                <StyledCol xs={12} md={6}>
                    <img src={this.props.image} title={this.props.title} />
                </StyledCol>
                
                <StyledCol xs={12} md={6}>
                    <Title>Send a Message</Title>
                    <StyledForm
                        name="contact" 
                        method="post" 
                        data-netlify="true" 
                        data-netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="form-name" value="Contact Us" />
                        <textarea name="message" placeholder="Type something" />
                        <section>
                            <input type="text" name="name" placeholder="Name" />
                            <input type="email" name="email" placeholder="Email address" />
                        </section>
                        <button type="submit">Send</button>
                    </StyledForm>
                </StyledCol>
            </StyledRow>
        </Wrapper>
      </>
    );
  }
}
 
export default ContactContent