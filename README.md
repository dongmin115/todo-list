# 서버 시작하기

```bash
$ git clone https://github.com/sangminlee98/api-practice.git
```

```bash
$ cd api-practice/todo-server
```

```bash
$ docker-compose up -d
```

# API 명세
![스크린샷 2023-07-11 오전 4 21 15](https://github.com/sangminlee98/api-practice/assets/83197138/c6d8731b-346c-4bfc-9c0c-c0db3e5c3e9b)

## 1. getTodos

### Request

- URL: `api/todos`
- Method: `GET`

### Response

```json
{
  "todos": [
    {
      "id": 1,
      "title": "할일 1",
      "done": false,
      "thumbnail": "https:// ~"
    },
    {
      "id": 2,
      "title": "할일 2",
      "done": true,
      "thumbnail": "https:// ~"
    },
    {
      "id": 3,
      "title": "할일 3",
      "done": false,
      "thumbnail": "https:// ~"
    }
  ]
}
```

## 2. createTodo

### Request

- URL: `api/todos`
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body:
  - `todoData: string`
  - `file?: File`

### Response

```json
{
  "id": 1,
  "title": "할일 1",
  "done": false,
  "thumbnail": "https:// ~"
}
```

## 3. updateTodo

### Request

- URL: `api/todos/:id`
- Method: `PUT`

### Response

```json
{
  "id": 1,
  "title": "할일 1",
  "done": false,
  "thumbnail": "https:// ~"
}
```

## 4. deleteTodo

### Request

- URL: `api/todos/:id`
- Method: `DELETE`

### Response

```json
없음
```
