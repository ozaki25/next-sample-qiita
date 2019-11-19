import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import useForm from 'react-hook-form';
import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  Glyphicon,
  HelpBlock,
  Panel,
} from 'react-bootstrap';
import Layout from '../../components/Layout';
import useQiitaComments from '../../hooks/useQiitaComments';

const basePath = process.env.basePath;

function Edit() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, find, update, comment } = useQiitaComments();
  const { register, handleSubmit, watch, errors } = useForm();

  const validationState = errors.comment ? 'error' : null;

  const onSubmit = async data => {
    try {
      const { comment } = data;
      await update({ id, comment });
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
            <Button type="submit" className="pull-right">
              <Glyphicon glyph="send" /> 更新
            </Button>
          </form>
        </Panel.Body>
      </Panel>
    </Layout>
  );
}

export default Edit;
