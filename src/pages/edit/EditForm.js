/* eslint-disable react/prop-types */
/* eslint-disable eqeqeq */
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import AnotherParagraph from './formChild/AnotherParagraph';
import AnotherParaImg from './formChild/AnotherParaImg';
import BannerAnotherArticle from './formChild/BannerAnotherArticle';
import FlowChart from './formChild/FlowChart';
import FormTop from './formChild/FormTop';
import InitialBanner from './formChild/InitialBanner';
import ParagraphWithImage from './formChild/ParagraphWithImage';
import TextParagraph from './formChild/TextParagraph';

const EditForm = (props) => {
  const { blogData } = props;
  const { id } = useParams();
  const blog = blogData.find((b) => b.page_id == id);
  console.log(blog);
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
    postData(defaultValues);
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
      <h2>Page Submission Form</h2>
      <FormTop register={register} formTop={formTop} setFormTop={setFormTop} />
      <div>
        <InitialBanner
          register={register}
          initialBannerR={initialBannerR}
          setInitialBannerR={setInitialBannerR}
        />
        <TextParagraph TextParagraphR={TextParagraphR} setTextParagraph={setTextParagraph} />
        <FlowChart register={register} flowChart={flowChart} setFlowChart={setFlowChart} />
        <ParagraphWithImage
          paragraphWithImage={paragraphWithImage}
          setParagraphWithImage={setParagraphWithImage}
          register={register}
        />
        <AnotherParagraph TextParagraphR={TextParagraphA} setTextParagraph={setTextParagraphA} />
        <AnotherParaImg
          paragraphWithImage={paragraphWithImage2}
          setParagraphWithImage={setParagraphWithImage2}
          register={register}
        />
        <BannerAnotherArticle
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
