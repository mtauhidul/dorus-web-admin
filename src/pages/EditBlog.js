/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { GlobalContext } from '../App';
import EditForm from './edit/EditForm';

export default function EditBlog() {
  const [global, setGlobal] = React.useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // const token = window.sessionStorage.getItem('token');
  // const headers = {
  //   Authorization: token,
  //   integrity
  // };
  // const postNewBlog = async (defaultValues) => {
  //   console.log(defaultValues);
  //   const response = await axios.post(`${baseUrl}/admin/post/en`, defaultValues, { headers });
  //   console.log(response);
  // };

  // const onSubmit = (data) => {
  //   console.log(errors);

  //   const defaultValues = {
  //     associated_template: data.associated_template,
  //     page_url: data.page_url,
  //     header: {
  //       title: data.title,
  //       asset: data.asset
  //     },
  //     sections: [
  //       {
  //         sectionType: 'initialBanner',
  //         content: {
  //           sectionTitle: data.sectionTitle1,
  //           sectionDescription: data.sectionDescription1,
  //           asset: data.asset1,
  //           style: null
  //         }
  //       },
  //       {
  //         sectionType: 'textParagraph',
  //         content: {
  //           sectionTitle: data.sectionTitle2,
  //           sectionDescription: data.sectionDescription2,
  //           asset: null,
  //           style: {
  //             backgroundColor: data.backgroundColor2,
  //             textColor: data.textColor2
  //           }
  //         }
  //       },
  //       {
  //         sectionType: 'flowChartBanner',
  //         content: {
  //           sectionTitle: data.sectionTitle3,
  //           sectionDescription: null,
  //           asset: data.asset3,
  //           style: {
  //             backgroundColor: data.backgroundColor3,
  //             textColor: data.textColor3
  //           }
  //         }
  //       },
  //       {
  //         sectionType: 'paragraphWithSideImage',
  //         content: {
  //           sectionTitle: data.sectionTitle4,
  //           sectionDescription: data.sectionDescription4,
  //           asset: data.asset4,
  //           style: {
  //             backgroundColor: data.backgroundColor4,
  //             textColor: data.textColor4
  //           }
  //         }
  //       },
  //       {
  //         sectionType: 'textParagraph',
  //         content: {
  //           sectionTitle: data.sectionTitle5,
  //           sectionDescription: data.sectionDescription5,
  //           asset: null,
  //           style: {
  //             backgroundColor: data.backgroundColor5,
  //             textColor: data.textColor5
  //           }
  //         }
  //       },
  //       {
  //         sectionType: 'paragraphWithSideImage',
  //         content: null
  //       },
  //       {
  //         sectionType: 'bannerToAnotherArticle',
  //         content: {
  //           sectionTitle: data.sectionTitle7,
  //           sectionDescription: null,
  //           asset: data.asset7,
  //           style: null
  //         }
  //       }
  //     ]
  //   };

  //   postNewBlog(defaultValues);
  // };

  return (
    <Box id="formBox">
      <EditForm blogData={global} />
    </Box>
  );
}
