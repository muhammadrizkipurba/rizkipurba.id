import React from 'react'

const ExperienceSection = () => {
  
  const experiences = [ 
    'html', 
    'css',
    'javascript',
    'bootstrap',
    'materialize',
    'react',
    'redux',
    'react-native',
    'nodejs',
    'npm',
    'gitlab',
    'git',
    'mongodb',
    'firebase',
    'cloudinary',
    'androidstudio',
    'robo3t',
    'postman',
  ];

  const render_experiences = experiences.map((item, idx) => (
      <div
        key={`tools-icon-${idx}`}
        className='col-md-2 col-sm-4 col-xs-4 mb-5 text-center'
      >
        <img
          height={50}
          src={`/assets/icons/web-development/${item}-icon.png`}
          alt={item}
          id={`${item}-icon`}
          className='mx-auto' 
        />
      </div>
  ))
  
  return (
    <div className='my-75'>
      <div style={{marginBottom: 70}}>
        <h3 className="title text-center mb-0">
          Tools I used to build
        </h3>
        <h3 className="title text-center">
          some <span className='text-gradient-1'>awesome projects :</span>
        </h3>
      </div>
      <div className='row'>
        {render_experiences}
      </div>
    </div>
  )
}

export default ExperienceSection
