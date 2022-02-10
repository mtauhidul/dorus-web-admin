/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const FlowChart = ({ register, flowChart, setFlowChart, data }) => {
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
      <h3 style={{ textTransform: 'capitalize' }}>Flowchart Banner Section</h3>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label htmlFor="">Section Title</label>

      <input
        defaultValue={data?.sectionTitle}
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
      <label htmlFor="">Section Asset URL</label>

      <input
        defaultValue={data?.asset}
        type="text"
        placeholder="Section Asset URL"
        {...register('asset9d', {
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
      <label htmlFor="">Alternate Asset URL</label>
      <input
        type="text"
        placeholder="Alternate Asset URL"
        {...register('asset4d', {
          required: true,
          pattern: validate
        })}
        onChange={(e) => {
          if (validate.test(e.target.value)) {
            setError(null);
            setFlowChart({
              ...flowChart,
              content: { ...flowChart?.content, alter_asset: e.target.value }
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
      <label htmlFor="">Text Color (HEX code)</label>

      <input
        defaultValue={data?.style?.textColor}
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
