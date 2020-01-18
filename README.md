# reactive-elasticsearch  
  
## Elasticsearch  

### ビルド
  
```console  
$ docker-compose build
```  
  
### 起動

```console  
$ docker-compose up
```  
 
### 起動しているか確認
```console  
$ docker-compose ps
```

```console
Name              Command               State                Ports 
--------------------------------------------------------------------------------  
es01   /usr/local/bin/docker-entr ...   Up      0.0.0.0:9200->9200/tcp, 9300/tcp  
es02   /usr/local/bin/docker-entr ...   Up      9200/tcp, 9300/tcp  
```  
  
  
### クラスタのヘルスチェック  
  
```console  
$ curl -X GET "localhost:9200/_cat/health?v&pretty" 
```

```console 
epoch      timestamp cluster           status node.total node.data shards pri relo init unassign pending_tasks max_task_wait_time active_shards_percent  
1579301492 22:51:32  es-docker-cluster green           2         2      0   0    0    0        0             0                  -                100.0%  
```  
  
### ノードのステータスチェック  
  
```console  
$ curl -X GET "localhost:9200/_cat/nodes?v&pretty"  
```

```console
ip         heap.percent ram.percent cpu load_1m load_5m load_15m node.role master name  
172.28.0.2           24          96   6    0.27    0.59     0.39 mdi       *      es02  
172.28.0.3           26          96   6    0.27    0.59     0.39 mdi       -      es01  
```

### kibana

http://localhost:5601/

## Reactive Search

### インストール
  
```console  
$ yarn install
``` 

### 起動

```console
$ cd search-app
$ yarn start
```
