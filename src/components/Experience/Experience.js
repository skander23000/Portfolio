import uniqid from 'uniqid'
import WorkIcon from '@material-ui/icons/Work'
import { experiences } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  if (!experiences.length) return null

  return (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>Experience</h2>
      <div className='experience__container'>
        {experiences.map((experience) => (
          <div key={uniqid()} className='experience__item'>
            <div className='experience__header'>
              <div className='experience__icon'>
                <WorkIcon />
              </div>
              <div className='experience__info'>
                <h3 className='experience__company'>{experience.company}</h3>
                <h4 className='experience__role'>{experience.role}</h4>
                <div className='experience__meta'>
                  <span className='experience__duration'>{experience.duration}</span>
                  <span className={`experience__type experience__type--${experience.type.toLowerCase()}`}>
                    {experience.type}
                  </span>
                </div>
              </div>
            </div>
            <ul className='experience__description'>
              {experience.description.map((item) => (
                <li key={uniqid()} className='experience__description-item'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience