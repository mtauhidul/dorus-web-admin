import React, { useState } from 'react';

const InitialBanner = ({ register, initialBannerR, setInitialBannerR }) => {
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
      <h3 style={{ textTransform: 'capitalize' }}>Initial Banner Section</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Section Title"
        required
        onChange={(e) => {
          setInitialBannerR({
            ...initialBannerR,
            content: {
              ...initialBannerR?.content,
              sectionTitle: e.target.value
            }
          });
        }}
      />
      <textarea
        placeholder="Section Description"
        onChange={(e) => {
          setInitialBannerR({
            ...initialBannerR,
            content: {
              ...initialBannerR?.content,
              sectionDescription: e.target.value
            }
          });
        }}
        required
      />
      <input
        type="text"
        placeholder="Section Asset URL"
        {...register('asset2', {
          required: true,
          pattern: validate
        })}
        onChange={(e) => {
          if (validate.test(e.target.value)) {
            setError(null);
            setInitialBannerR({
              ...initialBannerR,
              content: { ...initialBannerR?.content, asset: e.target.value }
            });
          } else {
            setError('please enter a valid url');
          }
        }}
      />
    </div>
  );
};

export default InitialBanner;
