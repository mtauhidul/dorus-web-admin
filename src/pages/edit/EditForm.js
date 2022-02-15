/* eslint-disable react/prop-types */
/* eslint-disable eqeqeq */
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import AnotherParagraph from './formChild/AnotherParagraph';
import AnotherParaImg from './formChild/AnotherParaImg';
import BannerAnotherArticle from './formChild/BannerAnotherArticle';
import FlowChart from './formChild/FlowChart';
import FormTop from './formChild/FormTop';
import InitialBanner from './formChild/InitialBanner';
import ParagraphWithImage from './formChild/ParagraphWithImage';
import TextParagraph from './formChild/TextParagraph';

const EditForm = ({ global, storedData }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(global);
  const blog = storedData.find((b) => b.page_id == id);
  console.log(blog?.en);
  const data = blog?.en;
  const [formTop, setFormTop] = useState({ ...blog?.en });
  const [initialBannerR, setInitialBannerR] = useState(blog?.en?.sections[0]);
  const [TextParagraphR, setTextParagraph] = useState(blog?.en?.sections[1]);
  const [flowChart, setFlowChart] = useState(blog?.en?.sections[2]);
  const [paragraphWithImage, setParagraphWithImage] = useState(blog?.en?.sections[3]);
  const [TextParagraphA, setTextParagraphA] = useState(blog?.en?.sections[4]);
  const [paragraphWithImage2, setParagraphWithImage2] = useState(blog?.en?.sections[5]);
  const [bannerAnotherArticle, setBannerAnotherArticle] = useState(blog?.en?.sections[6]);

  const postData = async (data) => {
    toast.loading('Updating...');
    delete data.language;
    console.log(data);
    const token = window.sessionStorage.getItem('token');
    const headers = {
      Authorization: token,
      integrity: '2H7g8BG75Zsc1NJTdljBBmr79KI3qEMrefR0LZQ'
    };
    try {
      const response = await axios.put(
        `https://sandboxuat.centralindia.cloudapp.azure.com/admin/post/en/${id}`,
        data,
        { headers }
      );
      toast.dismiss();
      toast.success('Successfully updated');
      console.log(response);
    } catch (error) {
      toast.dismiss();
      if (error.response.status === 401) {
        toast.error('Authentication failed, Login again');
        navigate('/login');
      } else {
        toast.error('Error! Try again');
      }
    }
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
      <h2 style={{ fontSize: '2rem' }}>Page Update Form</h2>
      <br />
      <br />
      <FormTop
        associated_template={data?.associated_template}
        header={data?.header}
        url={data?.page_url}
        type={data?.page_type}
        register={register}
        formTop={formTop}
        setFormTop={setFormTop}
      />
      <div>
        <InitialBanner
          data={data?.sections[0]?.content}
          register={register}
          initialBannerR={initialBannerR}
          setInitialBannerR={setInitialBannerR}
        />
        <TextParagraph
          data={data?.sections[1]?.content}
          TextParagraphR={TextParagraphR}
          setTextParagraph={setTextParagraph}
        />
        <FlowChart
          data={data?.sections[2]?.content}
          register={register}
          flowChart={flowChart}
          setFlowChart={setFlowChart}
        />
        <ParagraphWithImage
          data={data?.sections[3]?.content}
          paragraphWithImage={paragraphWithImage}
          setParagraphWithImage={setParagraphWithImage}
          register={register}
        />
        <AnotherParagraph
          data={data?.sections[4]?.content}
          TextParagraphR={TextParagraphA}
          setTextParagraph={setTextParagraphA}
        />
        <AnotherParaImg
          data={data?.sections[5]?.content}
          paragraphWithImage={paragraphWithImage2}
          setParagraphWithImage={setParagraphWithImage2}
          register={register}
        />
        <BannerAnotherArticle
          data={data?.sections[6]?.content}
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
