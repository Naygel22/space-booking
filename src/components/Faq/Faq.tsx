import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styles } from './Faq.styles'

const questionsAndAnswers = [
  {
    question: 'What are the opening hours of the co-working office?',
    answer: 'Our office is open 24/7 for members with full monthly access. The reception is open from Monday to Friday, from 9:00 to 18:00.'
  },
  {
    question: 'Do I need to book a place in advance?',
    answer: 'No, but it is recommended through our system on the website due to the often high occupancy of the office'
  },
  {
    question: 'Is it possible to have a free trial day?',
    answer: 'Yes, we offer a free trial day so you can check if our space meets your expectations. Contact us to arrange a visit.'
  },
  {
    question: 'Are there parking spaces available?',
    answer: 'Yes, we have parking spaces available for members. Please reserve your place in advance.'
  },
  {
    question: 'Is it possible to store personal items?',
    answer: 'Yes, we offer lockers for storing personal items. They can be rented depending on your needs.'
  }
]

export const Faq = () => {
  return (
    <Box sx={styles.faqBox}>
      <Typography sx={styles.title}>FAQ</Typography>
      <Box >
        <Box>
          {questionsAndAnswers.map((object) => (
            <Accordion >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={styles.question}>
                {object.question}
              </AccordionSummary>
              <AccordionDetails sx={styles.answer}>{object.answer}</AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
