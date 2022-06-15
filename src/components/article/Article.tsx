import React from 'react';
import {Grid} from '@mui/material';
import styled from "styled-components";
import {IComment} from "../../types/types";
import CommentForm from "../commentForm/CommentForm";
import CommentItem from "../commentItem/CommentItem";

const StyledH1 = styled.h1`
  color: #282c34;
  margin: 20px auto;
  padding: 0 50px;
  width: 100%;
`

const StyledParagraph = styled.p`
  margin: 20px auto;
  padding: 0 50px;
  text-align: justify;
  width: 100%;
`

const StyledSideBarPlaceholder = styled.h2`
  font-size: 30px;
  line-height: 100%;
  margin: 0 auto;
  padding-top: 50px;
  text-align: center;
  writing-mode: vertical-lr;
`

const StyledCommentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  padding: 0 50px;
`

interface IArticleProps {
    commentsArray: IComment[]
    handleAddComment: (newComment: IComment) => void
    handleChangeLikeCount: (method: string, commentId: number) => void
}

const Article: React.FC<IArticleProps> = ({commentsArray, handleAddComment, handleChangeLikeCount}) => {

    const commentsToRender = commentsArray.map((item) => {
        return (
            <CommentItem key={item.id} commentItem={item} handleChangeLikeCount={handleChangeLikeCount}/>
        )
    })

    return (
        <main>
            <Grid container spacing={2} sx={{
                margin: "0 auto",
                maxWidth: 1096
            }}>
                <Grid item xs={8}>
                    <StyledH1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda
                        atque
                        cupiditate
                        distinctio dolores doloribus dolorum, eos esse, ex explicabo facere fuga nobis pariatur quisquam
                        quod
                        sequi tenetur, vero!</StyledH1>
                    <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum explicabo
                        officia perspiciatis
                        reiciendis sint sit! Accusamus accusantium ad aliquam amet animi architecto autem commodi
                        delectus
                        deserunt distinctio dolorem dolorum et eveniet excepturi explicabo facere fugit itaque labore
                        laborum
                        libero magni nesciunt nobis, nostrum nulla quaerat quia quibusdam reiciendis rem tempora
                        temporibus
                        totam unde vel velit! Aliquam commodi consequatur consequuntur corporis dignissimos eligendi
                        facere,
                        maxime molestiae nam non numquam omnis optio quibusdam reiciendis rerum similique sint tempore
                        ut,
                        voluptas, voluptatibus! Beatae blanditiis iure sed tempore veritatis. Aliquam dolore est nisi
                        obcaecati
                        officiis pariatur perspiciatis possimus quidem? Corporis ducimus ea fugiat labore laudantium
                        molestias
                        nam placeat quas reiciendis? Blanditiis explicabo nam nobis optio possimus, repudiandae sint sit
                        ut.
                        Asperiores autem debitis fuga ipsa quibusdam quod, reprehenderit. Alias aliquid animi aut beatae
                        blanditiis consequatur dolore doloribus eos ex excepturi exercitationem explicabo facere id
                        illum
                        impedit incidunt, labore magni nam neque nesciunt nihil nisi non nulla odio officia perspiciatis
                        porro
                        possimus qui quisquam quos saepe sit soluta tempore temporibus ullam vero voluptatum. Expedita,
                        numquam
                        voluptate. Adipisci alias asperiores assumenda corporis debitis delectus deleniti dolorem
                        dolores
                        doloribus dolorum enim ex harum id inventore iure iusto libero minus nesciunt nostrum odit
                        officiis
                        placeat, possimus quasi, quibusdam quo, sed sint. Accusamus consequuntur expedita, magni nostrum
                        quae
                        vel. At dicta magni nesciunt obcaecati, possimus voluptatibus. Accusamus blanditiis commodi
                        consequuntur
                        corporis cum eligendi et, excepturi facere facilis incidunt ipsa ipsum laboriosam maxime minima
                        modi
                        molestiae mollitia nihil obcaecati optio perferendis quas ratione reprehenderit sunt temporibus
                        unde
                        veniam veritatis? A alias corporis deserunt earum eligendi enim eum, fugit hic iure, maiores
                        molestias
                        necessitatibus nihil nostrum quasi quos ratione reiciendis, reprehenderit sed soluta ullam.
                        Beatae
                        distinctio, hic in iusto natus porro repudiandae voluptates. Alias amet beatae corporis debitis
                        dignissimos doloribus enim ex, exercitationem illum ipsa iure maiores minima molestias nulla
                        perspiciatis provident, quaerat quam reprehenderit tempore vel veniam voluptatem voluptatum.
                        Consectetur
                        deserunt doloremque esse expedita inventore laboriosam libero mollitia nam, optio perspiciatis
                        quisquam
                        repellendus soluta totam. Aperiam atque aut blanditiis consequuntur debitis deleniti distinctio
                        dolores
                        esse et, ex id illo inventore minus nam natus nisi obcaecati perferendis porro praesentium, quae
                        quasi
                        quis repellendus repudiandae saepe veniam veritatis, voluptatem. A ab autem commodi consectetur
                        consequuntur distinctio eum, laudantium libero minima minus mollitia quidem repellendus saepe
                        sapiente
                        suscipit voluptatem voluptates! Ab adipisci animi, aspernatur culpa facere fuga in laborum nemo
                        sit.
                        Deleniti exercitationem labore odit officia, quasi quibusdam vel? Autem cumque, deleniti enim
                        expedita
                        inventore iure laboriosam nemo numquam, similique soluta tempora, unde voluptatibus voluptatum!
                        Accusantium amet, eveniet nulla optio recusandae tempore veniam. Architecto at aut autem
                        deserunt dicta
                        ducimus eligendi eum exercitationem explicabo, ipsam, magni nobis perspiciatis placeat possimus
                        quas
                        quibusdam, reiciendis? Earum esse illum nisi quae qui quos tempora vel. Aspernatur, beatae cum
                        cumque
                        eius enim numquam sapiente sed soluta? Asperiores dicta dolore earum ex fuga fugit impedit
                        incidunt iste
                        iusto laudantium placeat provident ratione, reiciendis repudiandae temporibus vel veniam. At
                        deleniti
                        dolore eius esse impedit inventore magni mollitia nam optio placeat, porro praesentium quae quia
                        quos
                        rerum similique temporibus!</StyledParagraph>
                </Grid>
                <Grid item xs={4}>
                    <StyledSideBarPlaceholder>
                        Side bar с рекламой и ссылками на статьи
                    </StyledSideBarPlaceholder>
                </Grid>
                <Grid item xs={8}>
                    <StyledCommentBlock>
                        {commentsToRender}
                    </StyledCommentBlock>
                </Grid>
                <Grid item xs={8}>
                    <CommentForm handleAddComment={handleAddComment}/>
                </Grid>
            </Grid>
        </main>
    );
};

export default Article;