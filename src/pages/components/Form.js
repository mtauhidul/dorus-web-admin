/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AnotherParagraph from './formChild/AnotherParagraph';
import AnotherParaImg from './formChild/AnotherParaImg';
import BannerAnotherArticle from './formChild/BannerAnotherArticle';
import FlowChart from './formChild/FlowChart';
import FormTop from './formChild/FormTop';
import InitialBanner from './formChild/InitialBanner';
import ParagraphWithImage from './formChild/ParagraphWithImage';
import TextParagraph from './formChild/TextParagraph';

const Form = () => {
  const [formTop, setFormTop] = useState({
    associated_template: '',
    page_url: '',
    header: {
      title: '',
      asset: ''
    }
  });
  const [initialBannerR, setInitialBannerR] = useState({
    sectionType: 'initialBanner',
    content: {
      sectionTitle: '',
      sectionDescription: '',
      asset: '',
      style: null
    }
  });
  const [TextParagraphR, setTextParagraph] = useState({
    sectionType: 'textParagraph',
    content: {
      sectionTitle: '',
      sectionDescription: '',
      asset: null,
      style: {
        backgroundColor: '',
        textColor: ''
      }
    }
  });

  const [flowChart, setFlowChart] = useState({
    sectionType: 'flowChartBanner',
    content: {
      sectionTitle: '',
      sectionDescription: null,
      asset: '',
      style: {
        backgroundColor: '',
        textColor: ''
      }
    }
  });
  const [paragraphWithImage, setParagraphWithImage] = useState({
    sectionType: 'paragraphWithSideImage',
    content: {
      sectionTitle: '',
      sectionDescription: '',
      asset: '',
      style: {
        backgroundColor: '',
        textColor: ''
      }
    }
  });
  const [TextParagraphA, setTextParagraphA] = useState({
    sectionType: 'textParagraph',
    content: {
      sectionTitle: '',
      sectionDescription: '',
      asset: null,
      style: {
        backgroundColor: '',
        textColor: ''
      }
    }
  });
  const [paragraphWithImage2, setParagraphWithImage2] = useState({
    sectionType: 'paragraphWithSideImage',
    content: {
      sectionTitle: '',
      sectionDescription: '',
      asset: '',
      style: {
        backgroundColor: '',
        textColor: ''
      }
    }
  });
  const [bannerAnotherArticle, setBannerAnotherArticle] = useState({
    sectionType: 'bannerToAnotherArticle',
    content: {
      sectionTitle: '',
      sectionDescription: null,
      asset: '',
      style: null
    }
  });

  const postData = async (data) => {
    console.log(data);
    const token = window.sessionStorage.getItem('token');
    const headers = {
      Authorization: token,
      integrity: '2H7g8BG75Zsc1NJTdljBBmr79KI3qEMrefR0LZQ'
    };
    const response = await axios.post(
      'https://sandboxuat.centralindia.cloudapp.azure.com/admin/post/en',
      data,
      { headers }
    );
    console.log(response);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log('OK');
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
      <h2 style={{ fontSize: '2rem' }}>Page Submission Form</h2>
      <br />
      <br />
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

export default Form;
