

function Scribble({children, ...rest}: {children?: React.ReactNode, size?: string}) {
    const size = rest.size == 'lg' ? 'button-large' : 'button-small';
  return (
    <button className={size}> Scribble</button>
  )
}

export default Scribble