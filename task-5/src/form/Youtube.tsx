// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';
// import { render } from '@testing-library/react';
// import { error } from 'console';

// interface FormValues {
//   name: string;
//   email: string;
//   group: string;
//   social: {
//     facebook: string;
//     twitter: string;
//   };
// }

// let renderCount = 0;

// export default function Youtube() {
//   const form = useForm<FormValues>({
//     defaultValues: {
//       name: '',
//       email: '',
//       group: '',
//       social: {
//         facebook: '',
//         twitter: '',
//       },
//     },
//   });
//   const { register, handleSubmit, control, formState } = form;
//   const { errors } = formState;
//   renderCount++;

//   const onSubmit = (data: FormValues) => {
//     console.log(data);
//   };

//   return (
//     <div className='flex items-center justify-center h-screen backdrop-blur-md'>
//       {renderCount / 2}
//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className='p-2 m-2 rounded-md bg-slate-400'>
//           <label htmlFor='name'>Name: </label>
//           <input
//             type='text'
//             id='name'
//             {...register('name', {
//               required: 'Name is required',
//             })}
//           />
//           <p>{errors.name?.message}</p>
//         </div>
//         <div className='p-2 m-2 rounded-md bg-slate-400'>
//           <label htmlFor='email'>Email: </label>
//           <input
//             type='text'
//             id='email'
//             {...register('email', {
//               required: 'Email is required',
//               pattern: {
//                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                 message: 'Invalid email address',
//               },
//               validate: {
//                 notAdmin: (value) => {
//                   return value !== 'naol@admin.com' || 'Admin is not allowed';
//                 },
//                 notBlacklisted: (value) => {
//                   return (
//                     value.endsWith('blacklisted.com') || 'You are blacklisted'
//                   );
//                 },
//               },
//             })}
//           />
//           <p>{errors.email?.message}</p>
//         </div>
//         <div className='p-2 m-2 rounded-md bg-slate-400'>
//           <label htmlFor='group'>Group: </label>
//           <input
//             type='text'
//             id='group'
//             {...register('group', {
//               required: 'Group is required',
//             })}
//           />
//           <p>{errors.group?.message}</p>
//         </div>
//         <div className='p-2 m-2 rounded-md bg-slate-400'>
//           <label htmlFor='facebook'>facebook: </label>
//           <input
//             type='text'
//             id='facebook'
//             {...register('social.facebook', {
//               required: 'Facebook is required',
//             })}
//           />
//           <p>{errors.social?.facebook?.message}</p>
//         </div>
//         <div className='p-2 m-2 rounded-md bg-slate-400'>
//           <label htmlFor='tiwtter'>tiwtter: </label>
//           <input
//             type='text'
//             id='tiwtter'
//             {...register('social.twitter', {
//               required: 'twitter is required',
//             })}
//           />
//           <p>{errors.social?.twitter?.message}</p>
//         </div>
//         <button type='submit' className='p-2 m-2 rounded-md bg-slate-400'>
//           Submit
//         </button>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// }

import Select from 'react-select';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Input } from '@material-ui/core';

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

const Youtube = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      iceCreamType: {},
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='firstName'
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <Controller
        name='iceCreamType'
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
          />
        )}
      />
      <input type='submit' />
    </form>
  );
};

export default Youtube;
