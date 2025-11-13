import { AccordionProvider } from './Context'

const Accordion = ({ children }) => {
  return <AccordionProvider>{children}</AccordionProvider>
}

export default Accordion
