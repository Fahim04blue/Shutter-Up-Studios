/* eslint-disable react/jsx-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable no-confusing-arrow */
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiFillWarning } from 'react-icons/ai';
import ProductService from 'services/ProductService';
import Swal from 'sweetalert2';

const AddService = ({ editServiceData, setEditServiceData }) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'description',
  });

  const watchFieldArray = watch('description');
  const controlledFields = fields.map((field, index) => ({
    ...field,
    ...watchFieldArray[index],
  }));

  const [file, setFile] = useState('');

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  const onSubmit = (data, e) => {
    const { name, summary, price, description, category } = data;
    const loading = toast.loading('Uploading... Please wait for few seconds');

    if (!editServiceData && !file) {
      toast.dismiss(loading);
      return toast.error('Please upload an image!');
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('summary', summary);
    formData.append('price', price);
    formData.append('description', JSON.stringify(description));
    formData.append('category', category);
    formData.append('image', file);

    if (editServiceData) {
      if (
        name === editServiceData.name &&
        summary === editServiceData.summary &&
        price === editServiceData.price &&
        description === editServiceData.description &&
        category === editServiceData.category._id
      ) {
        toast.dismiss(loading);
        setEditServiceData({});
        toast.error('You did not make any changes!');
      }

      if (!file) {
        toast.dismiss(loading);
        return toast.error('Please upload an image!');
      }

      ProductService.updateServiceById(editServiceData._id, formData)
        .then((res) => {
          toast.dismiss(loading);
          setEditServiceData(formData);
          Swal.fire({
            title: 'Service Updated Successfully!',
            text: '',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#5f031d',
          });
          reset('', {
            keepValues: false,
          });
        })
        .catch((err) => {
          toast.dismiss(loading);
          setEditServiceData({});
          Swal.fire({
            title: 'Update Failed',
            text: '',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#5f031d',
          });
        });
      return;
    }

    ProductService.createService(formData).then((res) => {
      toast.dismiss(loading);
      Swal.fire({
        title: 'Service Created Successfully!',
        text: '',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#5f031d',
      });
      reset('', {
        keepValues: false,
      });
    });
  };

  return (
    <div className="add__services">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="name">Name</label>
          {editServiceData ? (
            <input
              name="name"
              type="text"
              defaultValue={editServiceData.name}
              {...register('name')}
            />
          ) : (
            <>
              <input
                name="name"
                type="text"
                {...register('name', {
                  required: 'Product Name is Required',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ messages }) =>
                  messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <p className="error__message" key={type}>
                          <AiFillWarning style={{ marginTop: '-5px' }} />
                          <span>{message}</span>
                        </p>
                      ))
                    : null
                }
              />
            </>
          )}
        </fieldset>

        <fieldset>
          <label htmlFor="summary">Summary</label>
          {editServiceData ? (
            <textarea
              name="summary"
              type="text"
              defaultValue={editServiceData.summary}
              {...register('summary')}
            />
          ) : (
            <>
              <textarea
                name="summary"
                type="text"
                {...register('summary', {
                  required: 'Product Description Summary is Required',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="summary"
                render={({ messages }) =>
                  messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <p className="error__message" key={type}>
                          <AiFillWarning style={{ marginTop: '-5px' }} />
                          <span>{message}</span>
                        </p>
                      ))
                    : null
                }
              />
            </>
          )}
        </fieldset>

        <fieldset>
          <label htmlFor="price">Price</label>
          {editServiceData ? (
            <input
              name="price"
              type="number"
              defaultValue={editServiceData.price}
              {...register('price')}
            />
          ) : (
            <>
              <input
                name="price"
                type="number"
                {...register('price', {
                  required: 'Product Price is Required',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="price"
                render={({ messages }) =>
                  messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <p className="error__message" key={type}>
                          <AiFillWarning style={{ marginTop: '-5px' }} />
                          <span>{message}</span>
                        </p>
                      ))
                    : null
                }
              />
            </>
          )}
        </fieldset>
        <div className="description__field">
          <label className="link__label">
            <div className="link__label__title">Description</div>
          </label>
          {controlledFields.map((item, index) => (
            <fieldset>
              <label key={item.id}>Description {index}</label>
              <input {...register(`description[${index}].name`)} />
              <button
                className="mt-3"
                type="button"
                onClick={() => remove(index)}
              >
                Remove this description
              </button>
            </fieldset>
          ))}
          <button type="button" onClick={() => append({ name: '' })}>
            + Add Description
          </button>
        </div>

        <fieldset className="mt-3">
          <label>Category ID</label>
          {editServiceData ? (
            <input
              name="category"
              type="text"
              defaultValue={editServiceData.category._id}
              {...register('category')}
            />
          ) : (
            <>
              <input
                name="category"
                type="text"
                {...register('category', {
                  required: 'Product Category is Required',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="category"
                render={({ messages }) =>
                  messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <p className="error__message" key={type}>
                          <AiFillWarning style={{ marginTop: '-5px' }} />
                          <span>{message}</span>
                        </p>
                      ))
                    : null
                }
              />
            </>
          )}
        </fieldset>

        <fieldset className="mt-3">
          <label>{editServiceData ? 'Upload New Image' : 'Upload Image'}</label>
          <input type="file" name="image" onChange={handleFileUpload} />
        </fieldset>
        <button type="submit">{editServiceData ? 'Update' : 'Submit'}</button>
      </form>
    </div>
  );
};

export default AddService;
