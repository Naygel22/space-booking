import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styles } from './Faq.styles'
import { questionsAndAnswers } from './Faq.constants'


export const Faq = () => {
  return (
    <Box sx={styles.faqBox}>
      <Typography sx={styles.title}>FAQ</Typography>
      <Box >
        <Box>
          {questionsAndAnswers.map((object, id) => (
            <Accordion key={id}>
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
