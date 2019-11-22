import Router from 'next/router';
import useForm from 'react-hook-form';
import {
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock,
  Panel,
} from 'react-bootstrap';
import Layout from 'src/components/Layout';
import IconButton from 'src/components/IconButton';
import useQiitaComments from 'src/hooks/useQiitaComments';
import env from 'src/constants/env';

function New() {
  const { loading, create } = useQiitaComments();
  const { register, handleSubmit, errors } = useForm();

  const validationState = errors.comment ? 'error' : null;

  const onSubmit = async ({ comment }) => {
    try {
      await create({ comment });
      Router.push(`${env.basePath}/comments`);
    } catch (e) {
      alert(e.toString());
    }
  };

  return (
    <Layout>
      <Panel>
        <Panel.Heading>新しいコメント</Panel.Heading>
        <Panel.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup validationState={validationState}>
              <ControlLabel>コメントを投稿する</ControlLabel>
              <FormControl
                componentClass="textarea"
                id="comment"
                name="comment"
                rows="10"
                placeholder="Markdownが使えます"
                inputRef={register({
                  required: '必須項目です',
                  maxLength: {
                    value: 128,
                    message: '128字以内で入力してください',
                  },
                })}
              />
              {errors.comment && (
                <HelpBlock>{errors.comment.message}</HelpBlock>
              )}
            </FormGroup>
            <IconButton
              type="submit"
              className="pull-right"
              disabled={loading}
              glyph="send"
            >
              投稿
            </IconButton>
          </form>
        </Panel.Body>
      </Panel>
    </Layout>
  );
}

export default New;
