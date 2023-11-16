import React from 'react';
import profile from '../images/profile.png';

export default function Textbox(props) {
    const defaultlableClassName = 'text-black';
    const { showImage = true, dropdown=false } = props;
    return (
        <div>
            <div>
                <p
                    className={` text-lg ${defaultlableClassName} ${props.labelClassName} font-medium`}
                >
                    {props.label}
                </p>
            </div>
            <div className='relative'>
            {dropdown ? (
          <select
            id={props.id}
            name={props.name || props.id}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            className={`border-lightGrey border rounded-md pr-2 pl-2 h-11 mt-1 ${props.className}`}
          >
            <optgroup label="Select action">
            {props.options.map((option) => (
              <option key={option.value} value={option.value} >
                {option.label}
              </option>
            ))}
            </optgroup>
          </select>
        ) : (
          <input
            id={props.id}
            name={props.name || props.id}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            className={`border-lightGrey border rounded-md pr-2 pl-2 h-11 mt-1 ${props.className}`}
          />
        )}
                {showImage && (
                    <img
                        src={profile}
                        alt='.'
                        className='absolute top-6 right-20 transform -translate-y-1/2 translate-x-16'
                    />
                )}
            </div>
        </div>
    );
}
