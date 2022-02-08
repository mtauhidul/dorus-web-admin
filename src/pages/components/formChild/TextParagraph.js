/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const TextParagraph = ({ TextParagraphR, setTextParagraph }) => {
  const [error, setError] = useState('');
  const pattern = '^#(?:[0-9a-fA-F]{3,4}){1,2}$';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <br />
      <h3 style={{ textTransform: 'capitalize' }}>Text Paragraph Section</h3>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label htmlFor="">Section Title</label>
      <input
        type="text"
        placeholder="Section Title"
        onChange={(e) => {
          setTextParagraph({
            ...TextParagraphR,
            content: {
              ...TextParagraphR?.content,
              sectionTitle: e.target.value
            }
          });
        }}
        required
      />
      <label htmlFor="">Section Description</label>

      <textarea
        placeholder="Section Description"
        onChange={(e) => {
          setTextParagraph({
            ...TextParagraphR,
            content: {
              ...TextParagraphR?.content,
              sectionDescription: e.target.value
            }
          });
        }}
        required
      />
      <label htmlFor="">Background Color (HEX code)</label>

      <input
        type="text"
        placeholder="Background Color"
        pattern={pattern}
        onChange={(e) => {
          if (new RegExp(pattern).test(e.target.value)) {
            setTextParagraph({
              ...TextParagraphR,
              content: {
                ...TextParagraphR?.content,
                style: {
                  ...TextParagraphR.content.style,
                  backgroundColor: e.target.value
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
      <label htmlFor="">Text Color (HEX code)</label>

      <input
        type="text"
        placeholder="Text Color"
        onChange={(e) => {
          if (new RegExp(pattern).test(e.target.value)) {
            setTextParagraph({
              ...TextParagraphR,
              content: {
                ...TextParagraphR?.content,
                style: {
                  ...TextParagraphR.content.style,
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

export default TextParagraph;
