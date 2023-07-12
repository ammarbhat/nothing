import React from 'react'
function Newfeats() {
    return (
        <>
            <div className='text-white text-4xl text-center mt-20 h-30 pb-10'>Whats new?</div>
            <img src="./nothing-ph2-3.jpg" className='object-cover w-full sm:h-full  mb-30 ' style={{ height: '560px' }} />
            <div className='text-white text-3xl text-center h-30 py-10 px-5'>New design with curved back glass and new Glyph.</div>
            <div className='bg-gray-200 flex flex-wrap pt-10 justify-center'>
                <img src="./sample-1.jpg" className='w-1/3 m-5 md:w-96 md:m-10'  />
                <img src="./sample-2.jpg" className='w-1/3 m-5 md:w-96 md:m-10'  />
                <img src="./sample-3.jpg" className='w-1/3 m-5 md:w-96 md:m-10'  />
                <img src="./sample-4.jpg" className='w-1/3 m-5 md:w-96 md:m-10'  />
            </div>
            <div className='text-gray-800 text-3xl bg-gray-200 text-center h-30 py-10 px-5'>Better cameras.</div>
            <div><img src="./nothing-os.jpg" className='object-cover pt-10 md:w-1/2 w-96 h-auto m-auto '  /></div>
            <div className='text-white text-3xl text-center h-30 py-10 px-5'>New Nothing OS 2.0.</div>
            <div className='bg-gray-200' >
                <img src="./nothing-display.jpg" alt="" className='object-cover pt-10 md:w-1/2 w-96 h-auto m-auto '  />
            </div>
            <div className='text-gray-800 text-3xl bg-gray-200 text-center h-30 py-10 px-5'>Better display with new LTPO technology.</div>
            <div><img src="./8-gen-1.jpg" className='object-cover pt-10 md:w-1/2 w-96 h-auto m-auto '  /></div>
            <div className='text-white text-3xl text-center h-30 py-10 px-5'>More power with Snapdragon 8 Gen 1.</div>
            <div className='bg-gray-200' >
                <img src="./nothing-ph2-4.jpg" alt="" className='object-cover pt-10 md:w-1/2 w-96 h-auto m-auto '  />
                
            </div>
            <div className='text-gray-800 text-3xl bg-gray-200 text-center h-30 py-10 px-5'>Bigger battery.</div>
            <div className='text-gray-800 text-3xl bg-gray-200 text-center h-30 py-20 px-5'>And much more at <a href="https://nothing.tech" className='text-blue-500'>Nothing.tech</a></div>

            

        </>
    )
}

export default Newfeats