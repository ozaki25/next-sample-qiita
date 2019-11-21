import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
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

const { basePath } = process.env;

function Edit() {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();
  const {
    loading, find, update, comment,
  } = useQiitaComments();

  const { id } = router.query;
  const validationState = errors.comment ? 'error' : null;

  const onSubmit = async (data) => {
    try {
      await update({ id, comment: data.comment });
      Router.push(`${basePath}/comments`);
    } catch (e) {
      alert(e.toString());
    }
  };

  useEffect(() => {
    if (id) find({ id });
  }, [id]);

  return (
    <Layout>
      <Panel>
        <Panel.Heading>コメントの修正</Panel.Heading>
        <Panel.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup validationState={validationState}>
              <ControlLabel>コメントを編集する</ControlLabel>
              <FormControl
                componentClass="textarea"
                id="comment"
                name="comment"
                rows="10"
                placeholder="Markdownが使えます"
                defaultValue={comment.body}
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
              disabled={loading || !id}
              glyph="send"
            >
              更新
            </IconButton>
          </form>
        </Panel.Body>
      </Panel>
    </Layout>
  );
}

export default Edit;
