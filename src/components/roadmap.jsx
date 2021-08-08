export const Roadmap = (props) => {
  return (
    <div id='roadmap' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Roadmap</h2>
        </div>
        <div className='row'>
        <div className='col-xs-12 col-md-12'><h3 className="roadmapYear">2021</h3><hr></hr></div>
          {props.data
            ? props.data.year1.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
        <div className='row'>
        <div className='col-xs-12 col-md-12'><h3 className="roadmapYear">2022</h3><hr></hr></div>
          {props.data
            ? props.data.year2.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
