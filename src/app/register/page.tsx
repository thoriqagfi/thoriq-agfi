'use client';
import prisma from '@/lib/prisma';
import { Button, Input } from '@nextui-org/react';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type RegisterInput = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const { handleSubmit, register } = useForm<RegisterInput>();

  const onSubmit: SubmitHandler<RegisterInput> = (data: RegisterInput) => {
    console.log(data);
    prisma.users.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <form action='' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-5'>
          <Input
            {...register('name', { required: true })}
            isRequired
            isClearable
            label='Name'
            variant='flat'
            radius='sm'
            type='text'
            size='sm'
          />
          <Input
            {...register('email', { required: true })}
            isRequired
            isClearable
            label='Email'
            variant='flat'
            radius='sm'
            type='email'
            size='sm'
          />
          <Input
            {...register('password', { required: true })}
            isRequired
            isClearable
            label='Password'
            variant='flat'
            radius='sm'
            type='password'
            size='sm'
          />
          <Button type='submit'>Register</Button>
        </div>
      </form>
    </div>
  );
}
