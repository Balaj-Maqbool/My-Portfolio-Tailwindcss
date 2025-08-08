

const SectionHeading = ({p1,p2}) => {
    return (
        <h2 className='text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl  tracking-wide'>
            <span className='text-text'>{p1} </span>
            <span className='text-main font-semibold'>{p2}</span>
        </h2>
    )
}

export default SectionHeading
