import PropTypes from 'prop-types'

export default function Hello(props) {
  const className = []
  if (props.className) {
    props.className.split(' ').forEach((c) => className.push(c))
  }

  className.push('bg-slate-400')

  return <h1 className={className.join(' ')}>Hello {props.name}!</h1>
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
}
