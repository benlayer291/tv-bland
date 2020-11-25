import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'

const timeout = 600
const ease = 'cubic-bezier(0.43, 0.13, 0.23, 0.96)'

const transitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ${ease}`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ${ease}`,
    opacity: 0,
  },
}

type Props = {
  children?: React.ReactElement
  location?: string
}

const Transition: React.FunctionComponent<Props> = ({
  children,
  location,
}: Props) => {
  return (
    <TransitionGroup style={{ position: 'relative' }}>
      <ReactTransition
        key={location}
        timeout={{
          enter: timeout,
          exit: timeout,
        }}
      >
        {(status) => (
          <div
            style={{
              ...transitionStyles[status],
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
}
export default Transition
