import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import BookButton from '../components/BookButton.jsx'
import Icon from '../components/Icon.jsx'
import { site } from '../config.js'

const next = [
  { step: '01', title: 'Enquiry', text: 'You send a short message. It takes about two minutes.' },
  { step: '02', title: 'Reply', text: 'An engineer replies within one working day.' },
  { step: '03', title: '30-minute call', text: 'We discuss your setup, obvious risks and practical next steps.' },
  { step: '04', title: 'Technical questions', text: 'Only if it is a fit: a short questionnaire about your architecture.' },
  { step: '05', title: 'Proposal', text: 'A fixed scope, timeline and price for the work.' },
]

export default function Contact() {
  return (
    <>
      <Seo title="Contact" description="Talk to a Teknotran DevOps engineer. Send an enquiry or book a 30-minute infrastructure conversation." />
      <PageHero label="Contact" title="Let's talk about your infrastructure.">
        <p>Send a short enquiry or book a call. Deeper technical questions come later, only when they are useful.</p>
      </PageHero>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <h2 className="section-title sm">What happens next</h2>
            <ol className="next-steps">
              {next.map((n) => <li key={n.step}><span className="mono">{n.step}</span><div><h3>{n.title}</h3><p>{n.text}</p></div></li>)}
            </ol>
            <div className="contact-details">
              <p><Icon name="mail" size={18} /><span className="mono">{site.email}</span></p>
              <p><Icon name="linkedin" size={18} /><a href={site.linkedin} target="_blank" rel="noopener">Teknotran on LinkedIn</a></p>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <section className="section tinted" id="book">
        <div className="container book-panel">
          <span className="icon-tile"><Icon name="calendar" /></span>
          <div>
            <h2 className="section-title sm">Book a 30-minute audit call</h2>
            <p>A focused conversation with a DevOps engineer about your current infrastructure, obvious risks or cost issues, and practical next steps. This is an initial discovery call, not a full audit.</p>
            {!site.bookingUrl && <p className="hint">Online booking opens soon. For now, send the enquiry form above and mention "30-minute call", and we will reply with times.</p>}
          </div>
          {site.bookingUrl && <BookButton arrow />}
        </div>
      </section>
    </>
  )
}
