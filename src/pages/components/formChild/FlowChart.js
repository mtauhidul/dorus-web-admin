import React, { useState } from 'react';

const FlowChart = ({ register, flowChart, setFlowChart }) => {
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
      <h3 style={{ textTransform: 'capitalize' }}>Flowchart Banner Section</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Section Title"
        onChange={(e) => {
          setFlowChart({
            ...flowChart,
            content: {
              ...flowChart?.content,
              sectionTitle: e.target.value
            }
          });
        }}
        required
      />
      <input
        type="text"
        placeholder="Section Asset URL"
        {...register('asset4d', {
          required: true,
          pattern: validate
        })}
        onChange={(e) => {
          if (validate.test(e.target.value)) {
            setError(null);
            setFlowChart({
              ...flowChart,
              content: { ...flowChart?.content, asset: e.target.value }
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
            setFlowChart({
              ...flowChart,
              content: {
                ...flowChart?.content,
                style: {
                  ...flowChart.content.style,
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
      <input
        type="text"
        placeholder="Text Color"
        onChange={(e) => {
          if (new RegExp(pattern).test(e.target.value)) {
            setFlowChart({
              ...flowChart,
              content: {
                ...flowChart?.content,
                style: {
                  ...flowChart.content.style,
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

export default FlowChart;
