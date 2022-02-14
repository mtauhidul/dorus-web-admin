/* eslint-disable react/prop-types */
/* eslint-disable eqeqeq */
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import AnotherParagraph from './formChild/AnotherParagraph';
import AnotherParaImg from './formChild/AnotherParaImg';
import BannerAnotherArticle from './formChild/BannerAnotherArticle';
import FlowChart from './formChild/FlowChart';
import FormTop from './formChild/FormTop';
import InitialBanner from './formChild/InitialBanner';
import ParagraphWithImage from './formChild/ParagraphWithImage';
import TextParagraph from './formChild/TextParagraph';

const EditForm = ({ blog }) => {
  console.log(blog);
  const { id } = useParams();
  const [formTop, setFormTop] = useState({ ...blog?.en });
  const [initialBannerR, setInitialBannerR] = useState(blog?.en?.sections[0]);
  const [TextParagraphR, setTextParagraph] = useState(blog?.en?.sections[1]);
  const [flowChart, setFlowChart] = useState(blog?.en?.sections[2]);
  const [paragraphWithImage, setParagraphWithImage] = useState(blog?.en?.sections[3]);
  const [TextParagraphA, setTextParagraphA] = useState(blog?.en?.sections[4]);
  const [paragraphWithImage2, setParagraphWithImage2] = useState(blog?.en?.sections[5]);
  const [bannerAnotherArticle, setBannerAnotherArticle] = useState(blog?.en?.sections[6]);

  const postData = async (data) => {
    delete data.language;
    console.log(data);
    const token = window.sessionStorage.getItem('token');
    const headers = {
      Authorization: token,
      integrity: '2H7g8BG75Zsc1NJTdljBBmr79KI3qEMrefR0LZQ'
    };
    const response = await axios.put(
      `https://sandboxuat.centralindia.cloudapp.azure.com/admin/post/en/${id}`,
      data,
      { headers }
    );
    console.log(response);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = () => {
    const defaultValues = {
      ...formTop,
      sections: [
        initialBannerR,
        TextParagraphR,
        flowChart,
        paragraphWithImage,
        TextParagraphA,
        paragraphWithImage2,
        bannerAnotherArticle
      ]
    };

    // final output

    toast.promise(postData(defaultValues), {
      loading: 'Updating...',
      success: <b>Successfully updated</b>,
      error: <b>Error! Not updated</b>
    });
  };
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 style={{ fontSize: '2rem' }}>Page Update Form</h2>
      <br />
      <br />
      <FormTop
        associated_template={blog?.associated_template}
        header={blog?.header}
        url={blog?.page_url}
        type={blog?.page_type}
        register={register}
        formTop={formTop}
        setFormTop={setFormTop}
      />
      <div>
        <InitialBanner
          data={blog?.sections[0]?.content}
          register={register}
          initialBannerR={initialBannerR}
          setInitialBannerR={setInitialBannerR}
        />
        <TextParagraph
          data={blog?.sections[1]?.content}
          TextParagraphR={TextParagraphR}
          setTextParagraph={setTextParagraph}
        />
        <FlowChart
          data={blog?.sections[2]?.content}
          register={register}
          flowChart={flowChart}
          setFlowChart={setFlowChart}
        />
        <ParagraphWithImage
          data={blog?.sections[3]?.content}
          paragraphWithImage={paragraphWithImage}
          setParagraphWithImage={setParagraphWithImage}
          register={register}
        />
        <AnotherParagraph
          data={blog?.sections[4]?.content}
          TextParagraphR={TextParagraphA}
          setTextParagraph={setTextParagraphA}
        />
        <AnotherParaImg
          data={blog?.sections[5]?.content}
          paragraphWithImage={paragraphWithImage2}
          setParagraphWithImage={setParagraphWithImage2}
          register={register}
        />
        <BannerAnotherArticle
          data={blog?.sections[6]?.content}
          setBannerAnotherArticle={setBannerAnotherArticle}
          bannerAnotherArticle={bannerAnotherArticle}
          register={register}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default EditForm;
