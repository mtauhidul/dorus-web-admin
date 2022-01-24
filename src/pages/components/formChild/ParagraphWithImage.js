/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ParagraphWithImage = ({ register, paragraphWithImage, setParagraphWithImage }) => {
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
      <h3 style={{ textTransform: 'capitalize' }}>Paragraph With Side Image Section</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
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
        required
      />
      <textarea
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
        required
      />
      <input
        type="text"
        placeholder="Section Asset URL"
        {...register('asset5d', {
          required: true,
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
      <input
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
      <input
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
        required
      />
    </div>
  );
};

export default ParagraphWithImage;
