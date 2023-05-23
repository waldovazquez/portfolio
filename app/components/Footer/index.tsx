const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-light'>
      <div className='w-full h-full p-8 flex text-center justify-center bg-dark'>
        <small className='text-light font-medium text-sm md:text-lg'>
          &copy; {new Date().getFullYear()} Waldo Vazquez. Todos los derechos reservados.
        </small>
      </div>
    </footer>
  )
}

export default Footer
