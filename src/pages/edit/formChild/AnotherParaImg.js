/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const AnotherParaImg = ({ register, paragraphWithImage, setParagraphWithImage, data }) => {
  const [error, setError] = useState('');
  const pattern = '^#(?:[0-9a-fA-F]{3,4}){1,2}$';
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
      <br />
      <h3 style={{ textTransform: 'capitalize' }}>Paragraph With Side Image Section</h3>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label htmlFor="">Section Title</label>

      <input
        defaultValue={data?.sectionTitle}
        type="text"
        placeholder="Section Title"
        onChange={(e) => {
          setParagraphWithImage({
            ...paragraphWithImage,
            content: {
              ...paragraphWithImage?.content,
              sectionTitle: e.target.value
            }
          });
        }}
      />
      <label htmlFor="">Section Description</label>

      <textarea
        defaultValue={data?.sectionDescription}
        placeholder="Section Description"
        onChange={(e) => {
          setParagraphWithImage({
            ...paragraphWithImage,
            content: {
              ...paragraphWithImage?.content,
              sectionDescription: e.target.value
            }
          });
        }}
      />

      <label htmlFor="">Section Asset URL</label>

      <input
        defaultValue={data?.asset}
        type="text"
        placeholder="Section Asset URL"
        {...register('asset6d', {
          pattern: validate
        })}
        onChange={(e) => {
          if (validate.test(e.target.value)) {
            setError(null);
            setParagraphWithImage({
              ...paragraphWithImage,
              content: {
                ...paragraphWithImage?.content,
                asset: e.target.value
              }
            });
          } else {
            setError('please enter a valid url');
          }
        }}
      />

      <label htmlFor="">Section Alternative Asset URL</label>

      <input
        defaultValue={data?.asset}
        type="text"
        placeholder="Section Alternative Asset URL"
        {...register('asset8d', {
          pattern: validate
        })}
        onChange={(e) => {
          if (validate.test(e.target.value)) {
            setError(null);
            setParagraphWithImage({
              ...paragraphWithImage,
              content: {
                ...paragraphWithImage?.content,
                alter_asset: e.target.value
              }
            });
          } else {
            setError('please enter a valid url');
          }
        }}
      />

      <label htmlFor="">Background Color (HEX code)</label>

      <input
        defaultValue={data?.style?.backgroundColor}
        type="text"
        placeholder="Background Color"
        onChange={(e) => {
          if (new RegExp(pattern).test(e.target.value)) {
            setParagraphWithImage({
              ...paragraphWithImage,
              content: {
                ...paragraphWithImage?.content,
                style: {
                  ...paragraphWithImage.content.style,
                  backgroundColor: e.target.value
                }
              }
            });
            setError('');
          } else {
            setError('Please enter valid HEX');
          }
        }}
      />
      <label htmlFor="">Text Color (HEX code)</label>

      <input
        defaultValue={data?.style?.textColor}
        type="text"
        placeholder="Text Color"
        onChange={(e) => {
          if (new RegExp(pattern).test(e.target.value)) {
            setParagraphWithImage({
              ...paragraphWithImage,
              content: {
                ...paragraphWithImage?.content,
                style: {
                  ...paragraphWithImage.content.style,
                  textColor: e.target.value
                }
              }
            });
            setError('');
          } else {
            setError('Please enter valid HEX');
          }
        }}
      />
    </div>
  );
};

export default AnotherParaImg;
