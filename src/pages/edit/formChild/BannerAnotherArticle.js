/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const BannerAnotherArticle = ({
  register,
  bannerAnotherArticle,
  setBannerAnotherArticle,
  data
}) => {
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
      <br />
      <h3 style={{ textTransform: 'capitalize' }}>Banner To Another Article Section</h3>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label htmlFor="">Section Title</label>

      <input
        defaultValue={data?.sectionTitle}
        type="text"
        placeholder="Section Title"
        onChange={(e) => {
          setBannerAnotherArticle({
            ...bannerAnotherArticle,
            content: {
              ...bannerAnotherArticle?.content,
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
        {...register('asset7d', {
          required: true,
          pattern: validate
        })}
        onChange={(e) => {
          if (validate.test(e.target.value)) {
            setError(null);
            setBannerAnotherArticle({
              ...bannerAnotherArticle,
              content: {
                ...bannerAnotherArticle?.content,
                asset: e.target.value
              }
            });
          } else {
            setError('please enter a valid url');
          }
        }}
      />
    </div>
  );
};

export default BannerAnotherArticle;
