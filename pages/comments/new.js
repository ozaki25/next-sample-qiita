import useForm from 'react-hook-form/dist/react-hook-form';
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

function New() {
  const { register, handleSubmit, watch, errors } = useForm();
  const validationState = errors.comment ? 'error' : null;
  const onSubmit = data => {
    console.log(data);
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
              <Glyphicon glyph="send" /> 投稿
            </Button>
          </form>
        </Panel.Body>
      </Panel>
    </Layout>
  );
}

export default New;
