import Joyride, { CallBackProps } from 'react-joyride';
import { useNavigate } from 'react-router-dom';
import { useMount } from 'react-use';
import { Container } from '@mui/material';
import { useTourContext } from './TourContext';

export default function TourWrapper() {
  const {
    setState,
    state: { run, stepIndex, steps },
  } = useTourContext();
  const navigate = useNavigate();

  useMount(() => {
    setState({
      steps: [
        {
          target: 'body',
          content: (
            <>
              <h2>Welcome! This is your tour guide through the application </h2>
              <p>Click next button to start the tour.</p>
            </>
          ),
          disableBeacon: true,
          hideCloseButton: true
        },
        {
          target: '#booking-button',
          content: (
            <>
              <h2>Start your booking!</h2>
              <p>
                Click here to book your desk.
              </p>
            </>
          ),
        },
        {
          target: '#booking-page',
          content: (
            <>
              <h2>Booking platform</h2>
              <p>
                This is a place where you can book your seat in the office.
              </p>
            </>
          ),
        },
        {
          target: '#date-picker',
          content: (
            <>
              <h2>Calendar</h2>
              <p>
                Select a date to see the available spaces.
              </p>
            </>
          ),
        },
        {
          target: '.smplr-wrapper',
          content: (
            <>
              <h2>3D Model</h2>
              <p>
                Here, you can click on the desk you want to select. Green desks are free, and red ones are occupied.
              </p>
            </>
          ),
        },
        {
          target: '#user-on-navbar',
          content: (
            <>
              <h2>Your user profile</h2>
              <p>
                Click on your avatar and then select from the menu 'My account' to view your user dashboard.
              </p>
            </>
          ),
        },
        {
          target: '#user-dashboard',
          content: (
            <>
              <h2>User Dashboard</h2>
              <p>
                This is your user dashboard. You can see and edit your data here, manage your reservations and check everything on your personal calendar.
              </p>
            </>
          ),
        },
        {
          target: '#edit-button',
          content: (
            <>
              <h2>Edit your data</h2>
              <p>
                In this place, by clicking the pencil icon you can edit your data.
              </p>
            </>
          ),
        },
        {
          target: '#change-user-form',
          content: (
            <>
              <h2>Editing data</h2>
              <p>
                Here, you can edit your name, surname, e-mail or your phone number simply by typing new ones in the form below and clicking 'Save changes' button.
              </p>
            </>
          ),
        },
        {
          target: '#reservations-button',
          content: (
            <>
              <h2>Your Reservations</h2>
              <p>
                Click here to see your reservations.
              </p>
            </>
          ),
        },
        {
          target: '#reservations',
          content: (
            <>
              <h2>Reservations panel</h2>
              <p>Here, you can find all your reservations. You can see your reservaton ID, date and name of the desk you have booked.</p>
            </>
          ),
        },
        {
          target: '#status-button',
          content: (
            <>
              <h2>Reservation status</h2>
              <p>Every reservation has a status button. You can cancel your reservation by clicking on a 'Cancel' button. If the button is 'Completed', it means that your reservation is already done.</p>
            </>
          ),
        },
        {
          target: '#calendar-button',
          content: (
            <>
              <h2>Your Calendar</h2>
              <p>Click here to see your calendar.</p>
            </>
          ),
        },
        {
          target: '#calendar',
          content: (
            <>
              <h2>Calendar</h2>
              <p>This is your own personal calendar. You can see here your reservations depending on the month, week or day.</p>
            </>
          ),
        },
      ],
    });
  });

  const handleCallback = (data: CallBackProps) => {
    const { action, index, type, status } = data;

    const validStatuses: string[] = ['finished', 'skipped'];
    if (validStatuses.includes(status)) {
      setState({ run: false, stepIndex: 0, tourActive: false });
    }
    if (type === 'step:after') {
      switch (index) {
        case 0:
          if (action === 'next') {
            setState({ run: true, stepIndex: stepIndex + 1 });
          } else {
            navigate('/');
          }
          break;
        case 1:
          if (action === 'next') {
            setState({ run: true, stepIndex: 2 });
            navigate('/booking');
          } else if (action === 'prev') {
            setState({ stepIndex: stepIndex - 1 });
            navigate('/');
          }
          break;
        case 2:
          if (action === 'next') {
            setState({ run: true, stepIndex: 3 });

          } else if (action === 'prev') {
            setState({ stepIndex: stepIndex - 1 });
          }
          break;
        case 3:
          if (action === 'next') {
            setState({ run: true, stepIndex: 4 });

          } else if (action === 'prev') {
            setState({ stepIndex: stepIndex - 1 });
          }
          break;
        case 4:
          if (action === 'next') {
            setState({ run: true, stepIndex: 5 });

          } else if (action === 'prev') {

            setState({ stepIndex: stepIndex - 1 });
          }
          break;
        case 5:
          if (action === 'next') {
            setState({ run: true, stepIndex: 6 });
            navigate('/profile');
          } else if (action === 'prev') {
            navigate('/booking');
            setState({ stepIndex: stepIndex - 1 });
          }
          break;
        case 6:
          if (action === 'next') {
            setState({ run: true, stepIndex: 7 });

          } else if (action === 'prev') {
            navigate('/profile')
            setState({ stepIndex: stepIndex - 1 });
          }
          break;
        case 7:
          if (action === 'next') {
            setState({ run: true, stepIndex: 8 });
            document.getElementById('edit-button-click')?.click();
          } else if (action === 'prev') {


            setState({ stepIndex: stepIndex - 1 });
          }
          break;
        case 8:
          if (action === 'next') {
            setState({ run: true, stepIndex: 9 });
            document.getElementById('reservations-button')?.click();
          } else if (action === 'prev') {
            const editButton = document.getElementById('go-back-button');
            if (editButton) {
              editButton.click();
            }
            setTimeout(() => {


              setState({ stepIndex: stepIndex - 1 });
            }, 300);

          }
          break;
        case 9:
          if (action === 'next') {
            setState({ run: true, stepIndex: 10 });
          } else if (action === 'prev') {
            const profileButton = document.getElementById('profile-button');
            if (profileButton) {
              profileButton.click();
            }

            setTimeout(() => {
              const editButtonClick = document.getElementById('edit-button-click');
              if (editButtonClick) {
                editButtonClick.click();
              }

              setState({ stepIndex: stepIndex - 1 });
            }, 300);
          }
          break;

        case 10:
          if (action === 'next') {
            setState({ stepIndex: 11 });
          } else if (action === 'prev') {
            document.getElementById('reservations-button')?.click();
            setState({ run: true, stepIndex: stepIndex - 1 });
          }
          break;
        case 11:
          if (action === 'next') {
            setState({ stepIndex: 12 });
            document.getElementById('calendar-button')?.click();
          } else if (action === 'prev') {
            document.getElementById('reservations-button')?.click();
            setState({ run: true, stepIndex: stepIndex - 1 });
          }
          break;
        case 12:
          if (action === 'next') {
            setState({ stepIndex: 13 });

          } else if (action === 'prev') {
            document.getElementById('reservations-button')?.click();
            setState({ run: true, stepIndex: stepIndex - 1 });
          }
          break;
        case 13:
          if (action === 'prev') {
            setState({ stepIndex: stepIndex - 1 });
          } else {
            setState({ run: false, stepIndex: 0, tourActive: false });
          }
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Joyride
        callback={handleCallback}
        continuous
        showSkipButton
        showProgress
        run={run}
        stepIndex={stepIndex}
        steps={steps}
        styles={{
          options: {
            arrowColor: 'white',
            backgroundColor: 'whitesmoke',
            primaryColor: '#464949',
            textColor: 'black',
          },
        }}
      />
    </Container>
  );
}
