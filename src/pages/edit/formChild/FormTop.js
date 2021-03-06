/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const FormTop = ({ register, setFormTop, formTop, associated_template, header, url, type }) => {
  const [error, setError] = useState('');

  const validate = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label htmlFor="">Associated Template</label>
      <input
        defaultValue={associated_template}
        type="number"
        min={0}
        max={1}
        style={{ width: '150px' }}
        placeholder="Associated Template"
        required
        onChange={(e) => {
          setFormTop({ ...formTop, associated_template: e.target.value });
        }}
      />
      <label htmlFor="">Page Type</label>
      <select
        defaultChecked={type}
        required
        onBlur={(e) => {
          setFormTop({ ...formTop, page_type: e.target.value });
        }}
        name="page_type"
        id="page_type"
      >
        <option value="1">Blog</option>
        <option value="2">Page</option>
      </select>
      {/* <input
        defaultValue={type}
        type="number"
        style={{ width: '150px' }}
        placeholder="Page Type"
        onChange={(e) => {
          setFormTop({ ...formTop, page_type: e.target.value });
        }}
        required
      /> */}
      <label htmlFor="">Page URL</label>
      <input
        defaultValue={url}
        type="text"
        placeholder="Page URL"
        {...register('page_url', {
          required: true
        })}
        onChange={(e) => {
          setFormTop({ ...formTop, page_url: e.target.value });
        }}
      />
      <label htmlFor="">Title</label>
      <input
        defaultValue={header?.title}
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setFormTop({
            ...formTop,
            header: { ...formTop.header, title: e.target.value }
          });
        }}
        required
      />
      <label htmlFor="">Asset URL</label>
      <input
        defaultValue={header?.asset}
        type="text"
        placeholder="Asset URL"
        {...register('asset', {
          required: true,
          pattern: validate
        })}
        onChange={(e) => {
          if (validate.test(e.target.value)) {
            setError(null);
            setFormTop({
              ...formTop,
              header: { ...formTop.header, asset: e.target.value }
            });
          } else {
            setError('please enter a valid url');
          }
        }}
      />
    </div>
  );
};

export default FormTop;
