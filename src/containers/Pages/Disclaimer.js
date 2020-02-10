import React, { Fragment } from 'react';
import { StyledContent } from './styled';
import Hero from '../../components/Hero';
import strings from '../../constants/strings';
import Footer from '../../components/Footer';

const Disclaimer = () => (
  <Fragment>
    <Hero />
    <StyledContent>
      <p>
        <strong>Legal Disclosure</strong>
      </p>
      <p>{strings.author}</p>
      <p>Contact</p>
      <p>E-Mail: {strings.contact}</p>
      <p>
        <strong>Dispute resolution</strong>
      </p>
      <p>
        The European Commission provides a platform for online dispute
        resolution (OS): https://ec.europa.eu/consumers/odr.
      </p>
      <p>
        Please find our email in the legal disclosure. We do not take part in
        online dispute resolutions at consumer arbitration boards.
      </p>
      <p>
        <strong>Disclaimer</strong>
      </p>
      <p>Liability for content</p>
      <p>
        The contents of our pages have been created with the utmost care.
        However, we cannot guarantee the contents&rsquo; accuracy, completeness
        or topicality. According to statutory provisions, we are furthermore
        responsible for our own content on these web pages. In this context,
        please note that we are accordingly not obliged to monitor merely the
        transmitted or saved information of third parties, or investigate
        circumstances pointing to illegal activity.&nbsp;
      </p>
      <p>Liability for links</p>
      <p>
        Responsibility for the content of external links (to web pages of third
        parties) lies solely with the operators of the linked pages. No
        violations were evident to us at the time of linking. Should any legal
        infringement become known to us, we will remove the respective link
        immediately.
      </p>
      <p>
        <strong>Copyright</strong>
      </p>
      <p>
        Reproduction, editing, distribution as well as the use of any kind
        outside the scope of the copyright law require a written permission of
        the author or originator. Downloads and copies of these websites are
        permitted for private use only.
      </p>
      <p>
        The commercial use of our contents without permission of the originator
        is prohibited.
      </p>
      <p>
        Copyright laws of third parties are respected as long as the contents on
        these websites do not originate from the provider. Contributions of
        third parties on this site are indicated as such. However, if you notice
        any violations of copyright law, please inform us. Such contents will be
        removed immediately.
      </p>
    </StyledContent>
    <Footer />
  </Fragment>
);

export default Disclaimer;
