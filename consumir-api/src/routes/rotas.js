import MyRoute from './MyRoute';
import Alunos from '../pages/Alunos';
import Aluno from '../pages/Aluno';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Login from '../pages/Login';

export default function Rotas() {
  return (
    <>
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRoute exact path="/aluno/" component={Aluno} isClosed />
      <MyRoute exact path="/photos/:id" component={Fotos} isClosed />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />
    </>
  );
}
