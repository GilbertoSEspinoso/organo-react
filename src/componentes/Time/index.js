import './Time.css'

const Time = (props) => {
  const cssCorPrimaria = { borderColor: props.corPrimaria }
  const cssCorSecundaria = { backgroundColor: props.corSecundaria }

  return (
    <section className='time' style={cssCorSecundaria}>
      <h3 style={cssCorPrimaria}>{props.nome}</h3>
    </section>
  )
}

export default Time