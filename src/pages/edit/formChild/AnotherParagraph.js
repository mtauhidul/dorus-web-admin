import React, { useState } from 'react';

const AnotherParagraph = ({ TextParagraphR, setTextParagraph }) => {
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
      <h3 style={{ textTransform: 'capitalize' }}>Text Paragraph Section</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
      />
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
      />
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
      />
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
      />
    </div>
  );
};

export default AnotherParagraph;
